import { SyntheticEvent, useState } from "react"

// onClick and handleChange prop is a function that takes an event (e) of type SyntheticEvent and React.ChangeEvent<HTMLInputElement> as its argument and returns void (i.e., it doesn't return anything). This typically indicates an event handler function that will be called when a click event occurs.

// type React.ChangeEvent<HTMLInputElement> breakdown: React: This refers to the namespace of React.
// ChangeEvent: This indicates an event type. Specifically, it represents an event that occurs when the value of an input element changes.
// <HTMLInputElement>: This is a generic type parameter. In this case, it specifies the type of the element that is expected to trigger the change event. HTMLInputElement is a specific type representing input elements in HTML. So, React.ChangeEvent<HTMLInputElement> specifically refers to the change event of an input element.

// SyntheticEvent: In React, events are wrapped in SyntheticEvent objects for cross-browser compatibility and optimization purposes. SyntheticEvent is a base class for all React events. It is a lightweight wrapper around the native browser event, providing a consistent interface across different browsers.
interface Props {
  search: string | undefined;
  onSearchSubmit: (e: SyntheticEvent) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({search, onSearchSubmit, handleSearchChange}: Props): JSX.Element => {
  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={handleSearchChange} />
      </form> 
    </>
  )
}

export default Search