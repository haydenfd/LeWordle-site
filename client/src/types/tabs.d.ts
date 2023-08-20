// Tab.tsx types

interface TabProps {
    tab: string
}

// TabItem.tsx types
interface TabItemProps {
    tricode: string,
    img: string,
    key: number,
}

// TabGroup.tsx types
interface TabGroupProps {
    region: string;
}


export type {
    TabProps,
    TabGroupProps,
    TabItemProps,
}