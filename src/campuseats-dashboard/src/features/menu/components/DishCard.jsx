function DishCard({ dish }) {
  return (
    <div className="rounded-2xl border border-border glass p-5 shadow-md transition-all duration-300 hover:scale-104 hover:shadow-xl hover:border-primary m-4">
      <h3 className="text-xl font-bold text-foreground">{dish.name}</h3>

      <p className="mt-2 text-lg font-semibold text-primary">
        Rs. {dish.price.toFixed(2)}
      </p>

      <p className="mt-1 text-sm text-muted-foreground">{dish.category}</p>

      {!dish.available && (
        <span className="absolute -top-1 right-0 inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
          Sold Out
        </span>
      )}
    </div>
  );
}

export default DishCard;