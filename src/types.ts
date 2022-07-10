export const orderStatus = {
  new: "Новое",
  started: "Выполняется",
  assigned_to: "Назначено",
  declined: "Отменено",
  completed: "Выполнено",
} as const;

type OrderStatus = keyof typeof orderStatus;

export type Order = {
  id: number;
  oguid: string;
  status: OrderStatus;
  order_type: {
    name: string;
    oguid: string;
  };
  terminal: {
    name: string;
    oguid: string;
  };
  account: {
    name: string;
    oguid: string;
  };
  created_user: {
    surname: string;
    name: string;
    patronymic: string;
    oguid: string;
  };
  created_date: number;
};

export type PaginationProps = {
  pageNumbers: number[];
  paginateForward: (event: React.MouseEvent<HTMLButtonElement>) => void;
  paginateFullForward: (event: React.MouseEvent<HTMLButtonElement>) => void;
  paginateBack: (event: React.MouseEvent<HTMLButtonElement>) => void;
  paginateFullBack: (event: React.MouseEvent<HTMLButtonElement>) => void;
  currentPage: number;
  indexOfFirstPost: number;
  indexOfLastPost: number;
  handlePostsPerPage: (value: string) => void;
};
