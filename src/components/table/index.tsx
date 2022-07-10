import React from "react";
import { Order, orderStatus } from "../../types.ts";
import "./table.scss";

const formatDate = (timestamp: number) =>
  new Date(timestamp)
    .toLocaleString("ru-RU", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    })
    .replace(",", "");

const formatName = ({ name, surname, patronymic }: Order["created_user"]) => {
  return `${surname} ${name.slice(0, 1)}.${patronymic.slice(0, 1)}.`;
};

const StatusChip: React.FC<{ status: Order["status"] }> = ({ status }) => (
  <div className={`${status} chip`}>{orderStatus[status]}</div>
);

export const Table: React.FC<{ data: Order[] }> = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr className="table__header">
          <th>Номер / Дата</th>
          <th>Тип задания / Автор</th>
          <th>Аккаунт / Терминал</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({
            id,
            created_date,
            terminal,
            account,
            created_user,
            order_type,
            status,
          }) => (
            <tr
              key={id}
              className="table__row"
              onClick={() => (window.location.href = `${id}`)}
            >
              <td>
                <span className="table__span">№{id}</span>
                <br />
                <span className="table__span--secondary">
                  {formatDate(created_date)}
                </span>
              </td>
              <td>
                <span className="table__span">{order_type.name}</span>
                <br />
                <span className="table__span--secondary">
                  {formatName(created_user)}
                </span>
              </td>
              <td>
                <span className="table__span">{account.name}</span>
                <br />
                <span className="table__span--secondary">{terminal.name}</span>
              </td>
              <td>
                <StatusChip status={status} />
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
