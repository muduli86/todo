import { rest } from "msw";

const todoItems = [
  {
    id: "858e2e1e-7cb0-40c6-9c98-0a4b01e348dc",
    description: "Jogging",
    status: "Completed",
  },
  {
    id: "c38c35e4-bbfd-485f-a537-49d14dff7870",
    description: "Meet Joe",
    status: "Completed",
  },
  {
    id: "c48c35e4-bbfd-485f-a537-49d14dff7870",
    description: "Cooking",
    status: "Completed",
  },
  {
    id: "s48c35e4-bbfd-485f-a537-49d14dff7870",
    description: "Cooking",
    status: "In-Progress",
  },
];

export const handlers = [
  rest.get("/api/todoItems", (req, res, ctx) => {
    const selectedDate = req.url.searchParams.get("2022-05-22");
    if (selectedDate === "error") {
      return res(
        ctx.delay(),
        ctx.status(500),
        ctx.json({
          message: "An error occurred fetching ",
          correlationId: "c38c35e4-bbfd-485f-a537-49d14dff7870",
        })
      );
    }
    return res(
      ctx.delay(),
      ctx.status(200),
      ctx.json(selectedDate === "empty" ? [] : todoItems)
    );
  }),
];
