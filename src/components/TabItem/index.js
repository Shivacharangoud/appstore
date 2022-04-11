import './index.css'

const TabItem = props => {
  const {tabsList, onTabClick, isActive} = props
  const {tabId, displayText} = tabsList
  const activeClass = isActive ? 'is-active' : ''
  const onButtonClick = () => {
    onTabClick(tabId)
  }
  return (
    <li className="list-con">
      <button
        onClick={onButtonClick}
        className={`button ${activeClass}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
