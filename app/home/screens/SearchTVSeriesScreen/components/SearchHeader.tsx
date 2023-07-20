import { SearchTextInput } from "./SearchTextInput"
import { Header, HeaderProps } from "@core/components";

export type SearchHeaderProps = HeaderProps & {
  query: string;
  onQueryChange: (query: string) => void;
}

export function SearchHeader({ query, onQueryChange, ...props }: SearchHeaderProps) {
  return (
    <Header {...props}>
      <SearchTextInput
        autoFocus
        value={query}
        onChangeText={onQueryChange}
        placeholder="The Witcher" />
    </Header>
  )
}