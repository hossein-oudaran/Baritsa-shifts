import React, { useEffect } from "react";
import { useBarista } from "../../context/BaristaContext";
import { translateDay } from "../../utils/translateDays";
import { translateName } from "../../utils/translateNames";

const weekDaysOrder = [
  "saturday",
  "sunday",
  "monday",
  "tuseday",
  "wednesday",
  "thursday",
  "friday",
];

const shiftOrder = ["morning", "afternoon"];

function sortBaristasByDayAndShift(baristas) {
  const sortedBaristas = weekDaysOrder.map((day) => {
    const dayBaristas = baristas.filter((barista) => barista.week === day);
    const sortedDayBaristas = shiftOrder.map((shift) => {
      return dayBaristas.filter((barista) => barista.shift === shift);
    });
    return { day, shifts: sortedDayBaristas };
  });
  return sortedBaristas;
}

function BaristShiftsList() {
  const { baristas, getBaristas } = useBarista();

  useEffect(() => {
    getBaristas();
  }, []);

  const sortedBaristas = sortBaristasByDayAndShift(baristas);

  const handlePrint = () => {
    window.print();
  };
  return (
    <div>

      <button
        onClick={handlePrint}
        className="btn btn--secondary mb-4 print:hidden"
      >
        پرینت
      </button>
      <div className="mb-3 flex justify-center ">
        <h1 className="text-lg font-black">برنامه هفتگی شیفت باریستا</h1>
      </div>
      <div className=" border-4 border-secondary-400">
        {sortedBaristas.length > 0 ? (
          <table
            // ref={contentRef}
            className="table-auto w-full border-collapse print:[print-padding]"
          >
            <thead>
              <tr>
                <th className="px- py-2 border-b-4 border-b-secondary-400 ">
                  روز
                </th>
                <th className="px- py-2 border-b-4 border-r-4 border-r-secondary-400 border-b-secondary-400 ">
                  شیفت
                </th>
                <th className="px- py-2 border-b-4 border-r-4 border-r-secondary-400 border-b-secondary-400 ">
                  نام باریستا
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedBaristas.map(({ day, shifts }) => (
                <React.Fragment key={day}>
                  <tr className="">
                    <td
                      rowSpan={shiftOrder.length + 1}
                      className="px-4 py-2 border-b-2 border-b-secondary-400"
                    >
                      {translateDay(day)}
                    </td>
                  </tr>
                  {shifts.map((shiftBaristas, index) => (
                    <tr
                      key={`${day}-${shiftOrder[index]}`}
                      className={
                        index === shifts.length - 1
                          ? "border-b-2 border-b-secondary-400"
                          : ""
                      }
                    >
                      <td className="px-4 py-2 border-r-2  border-r-secondary-400">
                        {shiftOrder[index] === "morning" ? "صبح" : "بعد از ظهر"}
                      </td>
                      <td className="px-4 py-2 border-r-2 border-r-secondary-400 ">
                        {shiftBaristas.map((barista) => (
                          <div
                            key={barista.id}
                            className={
                              barista.name === "offBehrad" ||
                              barista.name === "offFatemeh"
                                ? "text-red-500 font-bold"
                                : ""
                            }
                          >
                            {translateName(barista.name)}
                          </div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        ) : (
          <p>در حال بارگذاری داده‌ها...</p>
        )}
      </div>
    </div>
  );
}

export default BaristShiftsList;
