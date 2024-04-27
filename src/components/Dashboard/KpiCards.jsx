// 'use client';
import { Card } from "@tremor/react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { translations } from "../../locales/translations";

const getTotals = (arr) => {
  return arr.reduce((acc, item) => acc + item.amount, 0);
};

const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default function KpiCards() {
  const { t, i18n } = useTranslation();
  const { sales, purchases } = useSelector((state) => state.stock);

  const totalSales = getTotals(sales);
  const totalPurchases = getTotals(purchases);

  const data = [
    {
      name: t(translations.sales.title),
      value: `€ ${totalSales}`,
      //   change: '-1.2%',
      //   changeType: 'negative',
      color: "indigo",
    },
    {
      name: t(translations.dashboard.cash),
      value: `€ ${totalSales - totalPurchases}`,
      color: "amber",
    },
    {
      name: t(translations.purchases.title),
      value: `€ ${totalPurchases}`,
      color: "rose",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 my-10">
        {data.map((item) => (
          <Card key={item.name} decoration="top" decorationColor={item.color}>
            <p className="flex items-start justify-between">
              <span className="text-[2rem] sm:text-[1.6rem] xl:text-tremor-metric  font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {formatNumber(item.value)}
              </span>
              {/* <span
                className={classNames(
                  item.changeType === 'positive'
                    ? 'text-emerald-700 dark:text-emerald-500'
                    : 'text-red-700 dark:text-red-500',
                  'text-tremor-default font-medium',
                )}
              >
                {item.change}
              </span> */}
            </p>
            <p className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {item.name}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}
