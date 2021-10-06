function printPath(steps, path = '') {
    if (steps == 0) {
        console.log(path.substring(1));
    }
    if (steps - 1 >= 0) {
        printPath(steps - 1, path + ",1")
    }
    if (steps - 2 >= 0) {
        printPath(steps - 2, path + ",2")
    }
}


printPath(4);