import { ProductNode } from "./types";

// Функция для преобразования плоской структуры products в дерево
export function createProductTree<T extends {}>(
  products: Record<string, { params: T }>,
  excludeKeys: (keyof T)[]
): ProductNode {
  const root: ProductNode = { children: {} };

  Object.entries(products).forEach(([id, product]) => {
    let currentNode = root;
    Object.entries(product.params).forEach(([key, rawValue]) => {
      const value = rawValue as string;
      if (!excludeKeys.includes(key as keyof T)) {
        if (!currentNode.children[value]) {
          currentNode.children[value] = { children: {} };
        }
        currentNode = currentNode.children[value];
      }
    });
    currentNode.id = id;
  });

  return root;
}

// Функция для получения следующего узла в дереве
export function getNextNode(
  tree: ProductNode,
  params: Record<string, string>
): ProductNode | null {
  let currentNode = tree;
  for (const param of Object.values(params)) {
    if (currentNode.children[param]) {
      currentNode = currentNode.children[param];
    } else {
      return null;
    }
  }

  return currentNode;
}
