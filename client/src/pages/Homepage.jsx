import React, { useState } from 'react'
import Item from '../components/Item'
import DropWrapper from '../components/DropWrapper'
import Column from '../components/Column'
import { data, statuses } from '../data'

const Homepage = () => {
  const [items, setItems] = useState(data)
  const onDrop = (item, monitor, status) => {
    const mapping = statuses.find((statusItem) => statusItem.status === status)
    setItems((prev) => {
      const newItems = prev
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon })
    })
    return [...newItems]
  }

  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex]
    setItems((prev) => {
      const newItems = prev.filter((_, idx) => idx !== dragIndex)
      newItems.splice(hoverIndex, 0, items)
      return [...newItems]
    })
  }

  return (
    <div className="row">
      {statuses.map((s) => {
        return (
          <div key={status} className="col-wrapper">
            <h2 className="col-header">{s.status.toUpperCase()}</h2>
            <DropWrapper onDrop={onDrop} status={s.status}>
              <Column>
                {items
                  .filter((i) => i.status === s.status)
                  .map((i, idx) => (
                    <Item
                      key={i.id}
                      item={i}
                      index={idx}
                      moveItem={moveItem}
                      status={s}
                    />
                  ))}
              </Column>
            </DropWrapper>
          </div>
        )
      })}
    </div>
  )
}

export default Homepage
