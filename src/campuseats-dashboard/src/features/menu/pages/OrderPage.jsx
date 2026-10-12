import { useState } from "react";
import { CircleCheckBig } from "lucide-react";

function OrderPage() {
  const [form, setForm] = useState({ name: "", email: "", qty: 1 });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function validate(v) {
    const e = {};

    if (v.name.trim().length < 2) {
      e.name = "Name too short";
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) {
      e.email = "Enter a valid email";
    }

    if (Number(v.qty) < 1) {
      e.qty = "Qty must be ≥ 1";
    }

    return e;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);

    if (Object.keys(found).length === 0) {
      setDone(true);
    }
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-green-500 bg-green-500/10 p-6 shadow-lg">
        <CircleCheckBig className="h-12 w-12 text-green-500" />
        <p className="text-lg font-semibold text-green-400">
          Thanks, {form.name}! Order received.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md"
    >
      <input
        className="border border-border rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-primary"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      {errors.name && (
        <span className="text-sm font-medium text-red-500">{errors.name}</span>
      )}

      <input
        className="border border-border rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-primary"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && (
        <span className="text-sm font-medium text-red-500">{errors.email}</span>
      )}

      <input
        className="border border-border rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-primary"
        name="qty"
        type="number"
        value={form.qty}
        onChange={handleChange}
      />
      {errors.qty && (
        <span className="text-sm font-medium text-red-500">{errors.qty}</span>
      )}

      <button
        type="submit"
        className="rounded-2xl bg-white/80 px-4 py-3 text-black font-semibold transition-all duration-300 hover:scale-105 hover:opacity-100"
      >
        Place order
      </button>
    </form>
  );
}

export default OrderPage;
