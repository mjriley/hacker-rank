from solution import Node, check_binary_search_tree_


def test_None():
    assert(check_binary_search_tree_(None) == True)


def test_no_children():
    tree = Node(7)
    assert(check_binary_search_tree_(tree) == True)


def test_compares_to_children():
    tree = Node(7)
    tree.left = Node(5)
    tree.right = Node(8)
    assert(check_binary_search_tree_(tree) == True)


def test_handles_no_left_child():
    tree = Node(7)
    tree.right = Node(8)
    assert(check_binary_search_tree_(tree) == True)


def test_handles_no_right_child():
    tree = Node(7)
    tree.left = Node(5)
    assert(check_binary_search_tree_(tree) == True)


def test_handles_bad_left():
    tree = Node(7)
    tree.left = Node(7)
    assert(check_binary_search_tree_(tree) == False)


def test_handles_bad_right():
    tree = Node(7)
    tree.right = Node(7)
    assert(check_binary_search_tree_(tree) == False)


def test_handles_bad_tree_left():
    bad_tree = Node(7)
    bad_tree.left = Node(8)

    tree = Node(8)
    tree.left = bad_tree
    assert(check_binary_search_tree_(tree) == False)


def test_handles_bad_tree_right():
    bad_tree = Node(8)
    bad_tree.left = Node(10)

    tree = Node(7)
    tree.right = bad_tree
    assert(check_binary_search_tree_(tree) == False)


def test_handles_example():
    candidate_tree = Node(3)
    candidate_tree.left = Node(5)
    candidate_tree.left.left = Node(1)
    candidate_tree.left.right = Node(4)
    candidate_tree.right = Node(2)
    candidate_tree.right.left = Node(6)

    assert(check_binary_search_tree_(candidate_tree) == False)


def test_handles_valid_nested_tree():
    candidate_tree = Node(4)
    candidate_tree.left = Node(2)
    candidate_tree.left.left = Node(1)
    candidate_tree.left.right = Node(3)
    candidate_tree.right = Node(6)
    candidate_tree.right.left = Node(5)

    assert(check_binary_search_tree_(candidate_tree) == True)


def test_handles_failing_example():
    candidate_tree = Node(3)
    candidate_tree.left = Node(2)
    candidate_tree.left.left = Node(1)
    candidate_tree.left.right = Node(4)
    candidate_tree.right = Node(6)
    candidate_tree.right.left = Node(5)
    candidate_tree.right.right = Node(7)

    assert(check_binary_search_tree_(candidate_tree) == False)
