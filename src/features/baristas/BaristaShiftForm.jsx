// BaristaShiftForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import { useBarista } from "../../context/BaristaContext";

const options = [
  { label: "صبح", value: "morning" },
  { label: "عصر", value: "afternoon" },
];
const days = [
  { label: "شنبه", value: "saturday" },
  { label: "یکشنبه", value: "sunday" },
  { label: "دوشنبه", value: "monday" },
  { label: "سه شنبه", value: "tuseday" },
  { label: "چهارشنبه", value: "wednesday" },
  { label: "پنجشنبه", value: "thursday" },
  { label: "جمعه", value: "friday" },
];
const BaristaNames = [
  {
    value: "behrad",
    label: "بهراد",
  },
  {
    value: "offBehrad",
    label: "آف بهراد",
  },

  {
    value: "fatemeh",
    label: "فاطمه",
  },
  {
    value: "offFatemeh",
    label: "آف فاطمه",
  },
];

function BaristaShiftForm() {
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { addBarista, getBaristas } = useBarista();

  const onSubmit = async (data) => {
    await addBarista(data);
    getBaristas();
  };

  return (
    <form
      className="w-full sm:max-w-sm no-print"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-5">
        <RHFSelect
          label="باریستا"
          name="name"
          register={register}
          required
          options={BaristaNames}
        />
      </div>
      <div className="mb-5">
        <RHFSelect
          label="شیفت"
          name="shift"
          register={register}
          required
          options={options}
        />
      </div>
      <div className="mb-5">
        <RHFSelect
          label="روزهای هفته"
          name="week"
          register={register}
          required
          options={days}
        />
      </div>
      <div>
        <button type="submit" className="btn btn--primary w-full">
          تأیید
        </button>
      </div>
    </form>
  );
}

export default BaristaShiftForm;
