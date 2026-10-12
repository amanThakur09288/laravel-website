export const formatBatchDate = (dateString) => {
  if (!dateString) {
    return "";
  }

  const [year, month, day] = dateString
    .split("-")
    .map(Number);

  const date = new Date(
    year,
    month - 1,
    day
  );

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};

export const formatBatchPrice = (amount) => {
  const numericAmount = Number(amount);

  if (!Number.isFinite(numericAmount)) {
    return "Rs. 0";
  }

  return `Rs. ${new Intl.NumberFormat("en-IN").format(
    numericAmount
  )}`;
};

export const getSeatsPercentage = (batch) => {
  const totalSeats = Number(batch?.totalSeats);
  const availableSeats = Number(batch?.availableSeats);

  if (!Number.isFinite(totalSeats) || totalSeats <= 0) {
    return 0;
  }

  if (!Number.isFinite(availableSeats)) {
    return 0;
  }

  const percentage =
    (availableSeats / totalSeats) * 100;

  return Math.max(
    0,
    Math.min(100, Math.round(percentage))
  );
};

export const getStatusClass = (status) => {
  const statusClasses = {
    "Enrolling Open": "bg-[#3fa653]",
    "Filling Fast": "bg-[#e0a020]",
    "Few Seats Left": "bg-[#e0a020]",
    "Coming Soon": "bg-[#727CB6]",
    "Sold Out": "bg-[#b04242]",
  };

  return (
    statusClasses[status] ||
    statusClasses["Enrolling Open"]
  );
};

export const getModeIcon = (mode) => {
  const modeIcons = {
    Online: "💻",
    Offline: "🏢",
    Hybrid: "🔄",
  };

  return modeIcons[mode] || "🎓";
};

export const isBatchJoinable = (batch) => {
  if (!batch) {
    return false;
  }

  return (
    batch.status !== "Sold Out" &&
    Number(batch.availableSeats) > 0
  );
};

export const getBatchDetailPath = (batchId) => {
  if (!batchId) {
    return "/upcoming-batches";
  }

  return `/upcoming-batches/${encodeURIComponent(
    batchId
  )}`;
};