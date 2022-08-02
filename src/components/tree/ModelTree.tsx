import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AnyAction, Dispatch } from "redux"
import { Model } from "../../dto/Model"
import { CheckboxSliceState, init, update } from "../../redux/checkboxSlice"
import { select } from "../../redux/treeSelectionSlice"
import { AppStateType, checkboxState, treeNodesState } from "../../redux/store"
import { TreeSliceState } from "../../redux/treeSlice"
import { getCurrentPath, isLeaf } from "../../utils/TreePathHelper"
import { TreeLeaf } from "../treeleaf/TreeLeaf"
import { TreeParent } from "../treeparent/TreeParent"
import styles from "./ModelTree.module.css"

type ModelTreeProps = {
  models: Model[]
}

const getCheckClickHandler = (
  state: number,
  index: number,
  dispatch: Dispatch<AnyAction>
) => {
  dispatch(update({ cellIndex: index, cellState: state }))
}

const getModelClickHandler = (
  modelId: number,
  dispatch: Dispatch<AnyAction>
) => {
  dispatch(select({ modelId }))
}

const getLeafComp = (
  model: Model,
  isChecked: number,
  index: number,
  dispatch: Dispatch<AnyAction>
) => {
  return (
    <TreeLeaf
      id={model.id.toString()}
      name={model.name}
      onCheckboxClick={(state) => {
        getCheckClickHandler(state, index, dispatch)
      }}
      onRowClick={() => {
        getModelClickHandler(model.id, dispatch)
      }}
      isChecked={isChecked}
      // Stryker disable next-line StringLiteral
      key={"tl" + model.id}
    />
  )
}

const getParentComp = (
  model: Model,
  isChecked: number,
  index: number,
  isOpen: boolean,
  dispatch: Dispatch<AnyAction>,
  children: JSX.Element[]
) => {
  return (
    <TreeParent
      // Stryker disable next-line StringLiteral
      key={"tp" + model.id}
      id={model.id.toString()}
      name={model.name}
      isChecked={isChecked}
      isOpen={isOpen}
      onCheckboxClick={(state) => {
        getCheckClickHandler(state, index, dispatch)
      }}
    >
      {children}
    </TreeParent>
  )
}

const buildTreeRecursive = (
  models: Model[],
  index: number,
  checksState: CheckboxSliceState,
  nodeState: TreeSliceState,
  dispatch: Dispatch<AnyAction>
): { comp: JSX.Element; currentIndex: number } => {
  const currentModel = models[index]
  const currentPath = getCurrentPath(models[index])
  if (isLeaf(models, index, currentPath)) {
    return {
      comp: getLeafComp(
        currentModel,
        checksState.value[index],
        index,
        dispatch
      ),
      currentIndex: index + 1,
    }
  } else {
    let nextNodeIndex = index + 1
    // Stryker disable next-line ArrayDeclaration
    const children = []
    while (
      nextNodeIndex < models.length &&
      models[nextNodeIndex].path === currentPath
    ) {
      const { comp, currentIndex } = buildTreeRecursive(
        models,
        nextNodeIndex,
        checksState,
        nodeState,
        dispatch
      )
      nextNodeIndex = currentIndex
      children.push(comp)
    }
    return {
      comp: getParentComp(
        currentModel,
        checksState.value[index],
        index,
        nodeState.isOpen,
        dispatch,
        children
      ),
      currentIndex: nextNodeIndex,
    }
  }
}

const buildTree = (
  models: Model[],
  checksState: CheckboxSliceState,
  nodeState: TreeSliceState,
  dispatch: Dispatch<AnyAction>
) => {
  let index = 0
  // Stryker disable next-line ArrayDeclaration
  const rootNodes: JSX.Element[] = []
  while (models && index < models.length) {
    const { comp, currentIndex } = buildTreeRecursive(
      models,
      index,
      checksState,
      nodeState,
      dispatch
    )
    index = currentIndex
    rootNodes.push(comp)
  }
  return rootNodes
}

export const ModelTree: React.FC<ModelTreeProps> = ({ models }) => {
  const dispatch = useDispatch()
  const checksState = useSelector<AppStateType, CheckboxSliceState>(
    checkboxState
  )
  const nodesState = useSelector<AppStateType, TreeSliceState>(treeNodesState)

  useEffect(() => {
    if (!checksState.tree.length) {
      const checks: number[] = new Array(models.length)
      checks.fill(1, 0, models.length)
      dispatch(init({ tree: models, checks }))
    }
  }, [checksState])

  return (
    <ul data-testid="modelTree" className={styles.ul}>
      {checksState.tree.length ? (
        buildTree(models, checksState, nodesState, dispatch)
      ) : (
        <div>Загрузка данных...</div>
      )}
    </ul>
  )
}
