export type Tabs = {
    contentsLength: number, 
    defaultTab: number, 
    onTabChange: (index: number) => void,
    disable?: boolean,
    textButton?: string
}