class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


IS_VALID_INDEX = 0
MIN_INDEX = 1
MAX_INDEX = 2


def check_binary_search_tree_(root):
    info = get_tree_info(root)
    if info is None:
        return True
    return info[IS_VALID_INDEX]


def get_tree_info(tree):
    if tree is None:
        return None

    left_info = get_tree_info(tree.left)
    if left_info is not None:
        if not left_info[IS_VALID_INDEX] or left_info[MAX_INDEX] >= tree.data:
            return [False, None, None]

    right_info = get_tree_info(tree.right)
    if right_info is not None:
        if not right_info[IS_VALID_INDEX] or right_info[MIN_INDEX] <= tree.data:
            return [False, None, None]

    tree_min = tree.data if left_info is None else left_info[MIN_INDEX]
    tree_max = tree.data if right_info is None else right_info[MAX_INDEX]

    return [True, tree_min, tree_max]
