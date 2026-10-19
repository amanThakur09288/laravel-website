import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getServices } from "../api/serviceApi";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getServices();

      const serviceData = Array.isArray(response.data) ? response.data : [];

      setServices(serviceData);
    } catch (error) {
      console.error("Failed to fetch services:", error);

      setError(error.response?.data?.message || "Unable to load services.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-gray-500">Loading services...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 px-4">
        <p className="text-red-600">{error}</p>

        <button
          type="button"
          onClick={fetchServices}
          className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-100 px-6 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Our Services
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            Explore the services we provide to help businesses build, manage and
            grow their technology infrastructure.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {services.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                No services are currently available.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                >
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {service.service_name}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {service.short_description}
                  </p>

                  <span className="mt-5 inline-block text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
