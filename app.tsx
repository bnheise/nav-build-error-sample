import { ClayVerticalNav } from "@clayui/nav";
import React from "react";

interface Item {
  id: string;
  items?: Item[];
  href?: string;
  label: string;
}

const items: Item[] = [
  {
    id: "1",
    items: [
      {
        id: "2",
        href: "#nested1",
        label: "Nested1",
      },
    ],
    label: "Home",
  },
  {
    id: "3",
    href: "#2",
    label: "About",
  },
  {
    id: "4",
    href: "#3",
    label: "Contact",
  },
  {
    id: "5",
    items: [
      {
        id: "6",
        href: "#5",
        label: "Five",
      },
      {
        id: "7",
        href: "#6",
        label: "Six",
      },
    ],
    label: "Projects",
  },
  {
    id: "8",
    href: "#7",
    label: "Seven",
  },
];

const App = () => {
  return (
    <ClayVerticalNav
      active="6"
      defaultExpandedKeys={new Set(["5"])}
      items={items}
      large={false}
    >
      {(item: unknown) => {
        const _item = item as Item;
        return (
          <ClayVerticalNav.Item
            href={_item.href ?? ""}
            items={_item.items ?? []}
            key={_item.id}
          >
            {_item.label}
          </ClayVerticalNav.Item>
        );
      }}
    </ClayVerticalNav>
  );
};
export default App;
