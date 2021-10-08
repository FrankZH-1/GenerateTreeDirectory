export function build(data: Array<HTMLElement>) {
  type Node = {
    name: String;
    level: Number;
    father: any;
    children: Node[];
  };
  const root: Node = {
    name: "目录",
    level: 0,
    father: {},
    children: [],
  };

  let prev = root;
  for (let i in data) {
    var node: Node = {
      name: "",
      level: 0,
      father: {},
      children: [],
    };
    if (data[i].nodeName) {
      node.name = data[i].innerHTML;
      node.level = parseInt(data[i].nodeName.slice(1));
      if (node.level > prev.level) {
        prev.children.push(node);
        node.father = prev;
      } else if (node.level == prev.level) {
        prev.father.children.push(node);
        node.father = prev.father;
      } else if (node.level < prev.level) {
        while (node.level < prev.level) {
          prev = prev.father;
        }
        prev.father.children.push(node);
        node.father = prev.father;
      }
      prev = node;
    }
  }
  return root;
}
