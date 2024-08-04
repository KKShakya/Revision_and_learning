// Composite Pattern

// Definition: Composes objects into tree structures to represent part-whole hierarchies, allowing clients to treat individual objects and compositions uniformly.

// Why It's Important:
//  Tree Structures: Facilitates the creation of complex structures from simple components.
//  Uniformity: Allows treating individual objects and compositions the same way.

// Component
class FileSystemComponent {
  show() {}
}
// Leaf
class File extends FileSystemComponent {
  constructor(name) {
    super();
    this.name = name;
  }
  show() {
    console.log(this.name);
  }
}
// Composite
class Directory extends FileSystemComponent {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }
  add(component) {
    this.children.push(component);
  }
  show() {
    console.log(this.name);
    for (let child of this.children) {
      child.show();
    }
  }
}
// Usage
const file1 = new File('File1.txt');
const file2 = new File('File2.txt');
const directory = new Directory('MyDocuments');
directory.add(file1);
directory.add(file2);

directory.show();

// FileSystemComponent: Abstract class for files and directories.
// File & Directory: Represent leaves and composites in the hierarchy.
// Tree Structure: Allows for easy creation and management of hierarchical structures.
