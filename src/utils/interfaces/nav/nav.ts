export interface IBaseMenu {
    label: string;
    url: string;
    component: () => JSX.Element
}

export interface IBaseMenuDropDown extends IBaseMenu {
    dropDown?: IBaseMenu[]
}
