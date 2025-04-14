function reconstructTree(inorder, preorder) {
  if (!preorder.length || !inorder.length) {
    return [];
  }

  const rootVal = preorder[0];
  const root = [rootVal];
  const rootIndexInorder = inorder.indexOf(rootVal);

  const leftInorder = inorder.slice(0, rootIndexInorder);
  const rightInorder = inorder.slice(rootIndexInorder + 1);

  const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
  const rightPreorder = preorder.slice(1 + leftInorder.length);

  root.push(reconstructTree(leftInorder, leftPreorder));
  root.push(reconstructTree(rightInorder, rightPreorder));

  return root;
}
