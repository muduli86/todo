import { useQuery } from "react-query";
import api from "./api";
/**
 * Search for a vehicle.
 */
const useGetTodoItems = (selectedDate) => {
  return useQuery(["getItems", selectedDate], () =>
    api.get("/api/todoItems", {
      searchParams: { date: selectedDate },
    })
  );
};

export { useGetTodoItems };
