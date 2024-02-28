import { SyntheticEvent, useState } from "react"

interface Props {
  search: string | undefined;
  onClick: (e: SyntheticEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({search, onClick, handleChange}: Props): JSX.Element => {
  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)}></input>
      <button onClick={(e) => onClick(e)}>search</button>
    </div>
  )
}

export default Search