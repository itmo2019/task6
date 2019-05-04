export default interface IToolbarItem {
  type: string,
  value: any,
  isActive?: boolean
  onClick?: () => void
}
