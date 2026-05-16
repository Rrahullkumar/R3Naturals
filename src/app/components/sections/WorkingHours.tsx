const schedule = [
  { day: 'Monday', times: ['07:00 - 09:00', ''] },
  { day: 'Tuesday', times: ['08:00 - 09:00', ''] },
  { day: 'Wednesday', times: ['08:00 - 09:00', '11:00 - 13:00'] },
  { day: 'Thursday', times: ['', '11:00 - 13:00'] },
  { day: 'Friday', times: ['', '11:00 - 13:00'] },
  { day: 'Saturday', times: ['', ''] },
  { day: 'Sunday', times: ['', ''] },
];

const therapists = [
  { name: 'Kevin Nomak', row: 0 },
  { name: 'Emma Brown', row: 1 },
  { name: 'Robert Bandana', row: 2 },
];

export default function WorkingHours() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-[160px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[90px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-[#e6e6dc] pb-4 mb-8 md:mb-12 gap-4">
          <h2 className="reveal-text font-['Melodrama',serif] text-[clamp(2rem,4.5vw,4rem)] text-black uppercase tracking-wider">
            WORKING HOURS
          </h2>
          <p className="font-['Jost',sans-serif] text-sm md:text-base text-[#666] max-w-[500px]">
            We recommend booking your appointment in advance to ensure your preferred time slot. Walk-ins are welcome depending on availability.
          </p>
        </div>

        {/* Filter */}
        <div className="mb-6">
          <button className="px-5 py-3 border border-[#e6e6dc] font-['Jost',sans-serif] text-base text-black hover:bg-[#fbf2eb] transition-colors">
            All Events
          </button>
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <div className="min-w-[700px]">
            {/* Days Header */}
            <div className="grid grid-cols-7 bg-[#fbf2eb]">
              {schedule.map(({ day }) => (
                <div key={day} className="px-3 py-2.5 text-center border border-[#fbf2eb]">
                  <span className="font-['Jost',sans-serif] text-sm md:text-base text-[#ca6a1f]">{day}</span>
                </div>
              ))}
            </div>

            {/* Rows */}
            {therapists.map((therapist) => (
              <div key={therapist.name} className="grid grid-cols-7">
                {schedule.map(({ day, times }, colIdx) => {
                  const time = times[therapist.row] || times[0];
                  const hasBooking = time && colIdx < 5;
                  return (
                    <div
                      key={`${therapist.name}-${day}`}
                      className="bg-[#fffef6] border border-[#fbf2eb] p-2 md:p-3 min-h-[80px] md:min-h-[120px] flex flex-col gap-2"
                    >
                      {hasBooking && (
                        <>
                          <div className="text-center">
                            <p className="font-['Melodrama',serif] text-xs md:text-sm text-black">{therapist.name}</p>
                            <p className="font-['Jost',sans-serif] text-xs text-black/70 mt-1">{time}</p>
                          </div>
                          <button
                            className={`w-full py-1.5 rounded-sm text-xs font-['Jost',sans-serif] transition-colors ${
                              colIdx === 2 || colIdx === 3
                                ? 'bg-[#fbf2eb] text-[#ca6a1f] hover:bg-[#ca6a1f] hover:text-white'
                                : 'bg-[#e6e6dc] text-black cursor-default'
                            }`}
                          >
                            {colIdx === 2 || colIdx === 3 ? 'Book now' : 'Unavailable'}
                          </button>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
