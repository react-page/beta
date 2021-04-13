import { Editor, Path, Text, Transforms } from 'slate';
import type { ReactEditor } from 'slate-react';

type ListBaseDef = {
  allListTypes: string[];
  listItemType: string;
};

export const getActiveList = (editor: Editor, allListTypes: string[]) => {
  const [matchingNode] = Editor.nodes(editor, {
    match: (elem) => allListTypes.includes(elem.type as string),
    mode: 'lowest', // FIXME: whats the best value?
  });
  return matchingNode;
};

export const getActiveListType = (editor: Editor, allListTypes: string[]) => {
  return getActiveList(editor, allListTypes)?.[0]?.type;
};

export const getPreviousListItem = (editor: Editor, listItemType: string) => {
  const [currentLi] = Editor.nodes(editor, {
    match: (elem) => elem.type === listItemType,
    mode: 'lowest',
  });

  const hasPrevious = currentLi && currentLi[1][currentLi[1].length - 1] > 0;
  return hasPrevious ? Editor.node(editor, Path.previous(currentLi[1])) : null;
};
export const increaseListIndention = (
  editor: Editor,
  def: ListBaseDef,
  listType?: string
) => {
  const currentActiveType = getActiveListType(editor, def.allListTypes);

  const previous = getPreviousListItem(editor, def.listItemType);

  Transforms.setNodes(editor, {
    type: def.listItemType,
  });

  if (previous) {
    // first make the previous node a paragraph
    Transforms.setNodes(
      editor,
      {
        type: null,
      },
      {
        at: previous[1],
      }
    );

    // wrap the pararaph as a new list item
    Transforms.wrapNodes(
      editor,
      {
        type: def.listItemType,
        children: [],
      },
      {
        at: previous[1],
      }
    );

    // move the current node after the paragraph
    Transforms.moveNodes(editor, {
      to: [...previous[1], 1],
    });
    Transforms.wrapNodes(editor, {
      type: listType ?? currentActiveType,
      children: [],
    });
  } else {
    Transforms.wrapNodes(editor, {
      type: listType ?? currentActiveType,
      children: [],
    });
  }
};

const moveToParent = (
  editor: ReactEditor,
  nodePath: Path,
  targetPath: Path,
  parentIsList: boolean
) => {
  Transforms.moveNodes(editor, {
    at: nodePath,
    to: targetPath,
  });

  if (!parentIsList) {
    const targetNode = Editor.node(editor, targetPath);
    // see https://github.com/ianstormtaylor/slate/issues/3769
    const onlyTextChildren = (targetNode?.[0].children as Node[])?.every(
      (child) => Text.isText(child) || Editor.isInline(editor, child)
    );
    if (onlyTextChildren) {
      Transforms.setNodes(
        editor,
        {
          type: null,
        },
        {
          at: targetPath,
        }
      );
    } else {
      Transforms.unwrapNodes(editor, {
        at: targetPath,
      });
    }
  }
};
export const decreaseListIndention = (
  editor: ReactEditor,
  def: ListBaseDef
) => {
  const [currentLi] = Editor.nodes(editor, {
    match: (elem) => elem.type === def.listItemType,
    mode: 'lowest',
  });
  const currentLiPath = currentLi[1];
  const currentParent = Path.parent(currentLiPath);
  const parentListItemPath = Path.parent(currentParent);
  const parentListItem = Editor.node(editor, parentListItemPath);
  const parentIsList = parentListItem?.[0].type === def.listItemType;

  const isFirstInItsList = currentLiPath[currentLiPath.length - 1] === 0;

  const targetPath = parentIsList
    ? Path.next(parentListItemPath)
    : Path.next(currentParent);

  let next;
  do {
    next = Editor.next(editor, {
      at: currentLiPath,
    });

    if (next) {
      moveToParent(editor, next[1], targetPath, parentIsList);
    }
  } while (next);

  moveToParent(editor, currentLiPath, targetPath, parentIsList);

  if (isFirstInItsList) {
    // the list will be empty now, remove it

    Transforms.removeNodes(editor, {
      at: currentParent,
    });
    if (parentIsList) {
      const previousParagraphPath = [...Path.previous(targetPath), 0];
      const previousParagraph = Editor.node(editor, previousParagraphPath);

      if (!previousParagraph?.[0].type) {
        Transforms.unwrapNodes(editor, {
          at: previousParagraphPath,
          split: true,
        });
      }
    }
  }
};
