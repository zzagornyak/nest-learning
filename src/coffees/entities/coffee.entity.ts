import { isInstance } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // sql table === 'coffee' in lowercase
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    brand: string;
    @Column()
    flavors: string[];
}
//

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

class Result {
    minDiff: number;
    prevVal: number | null;
    constructor() {
        this.minDiff = Infinity;
        this.prevVal = null;
    }
}

function getMinimumDifference(root: TreeNode | null): number {
    const result = new Result();
    inorderTraversal(root, result);
    return result.minDiff;
}
function inorderTraversal(node: TreeNode | null, result: Result): void {
    if (node === null) {
        return;
    }
    inorderTraversal(node.left, result);
    if (result.prevVal !== null) {
        result.minDiff = Math.min(result.minDiff, node.val - result.prevVal);
    }
    result.prevVal = node.val;
    inorderTraversal(node.right, result);
}
