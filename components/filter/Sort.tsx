import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Sort = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="nothing">Nothing</SelectItem>
          <SelectItem value="popularity"> Popularity</SelectItem>
          <SelectItem value="organic">Organic</SelectItem>
          <SelectItem value="fantastic">Fantastic</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Sort;
