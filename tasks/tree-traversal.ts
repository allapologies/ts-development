const tree = {
    label: 'hello',
    description: 'Lorem Ipsum',
    children: [{
        label: 'foo',
        description: 'Lorem Ipsum 2',
        children: [{
            label: 'bar',
            description: 'Lorem Ipsum 3',
        }, {
            label: 'john',
            description: 'Lorem Ipsum 4',
        }]
    }]
}

type treeType = { label: string, description: string , children?: treeType[]}

function toLabelsArray(tree :treeType): string[] {
    let labels: string[] = []

    let process = function (tree) {
        labels.push(tree.label)
        if (tree.children) {
            for (let i =0; i< tree.children.length; i++) {
                process(tree.children[i])
            }
        }
    }
    process (tree)

    return labels
}

const result = toLabelsArray(tree)
console.log(result)