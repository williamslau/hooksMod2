
# 类组件的不足

- 趋向复杂难以维护
    生命周期函数混杂不相干逻辑
    相干逻辑分散在不同生命周期

- this指向困扰
    内联函数过度创建新句柄
    类成员函数不能保证this

# Hooks优势
 - 优化类组件的三大问题
    函数组件无this问题
    自定义Hooks方便复用状态逻辑
    副作用的关注点分离

# react hooks
Hook 本质就是 JavaScript 函数，但是在使用它时需要遵循两条规则。我们提供了一个 linter 插件来强制执行这些规则：

只在最顶层使用 Hook
不要在循环，条件或嵌套函数中调用 Hook， 确保总是在你的 React 函数的最顶层调用他们。遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确。(如果你对此感到好奇，我们在下面会有更深入的解释。)

只在 React 函数中调用 Hook
不要在普通的 JavaScript 函数中调用 Hook。你可以：

✅ 在 React 的函数组件中调用 Hook
✅ 在自定义 Hook 中调用其他 Hook (我们将会在下一页 中学习这个。)


PureComponent memo useMemo useCallback
useRef
lazy

useState useReducer
useEffect

自定义Hooks
