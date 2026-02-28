export default function FilterBar({ tags, selectedTags, onToggleTag, onClearFilters }) {
  const hasActiveFilters = selectedTags.length > 0;

  return (
    <section
      className="filter-bar reveal-on-scroll pixel-mask"
      aria-label="Filter projects by technology"
    >
      <span>Filter by:</span>

      <button
        type="button"
        onClick={onClearFilters}
        className={
          "filter-button filter-button--all" +
          (!hasActiveFilters ? " filter-button--active" : "")
        }
        aria-pressed={!hasActiveFilters}
      >
        #all
      </button>

      {tags.map((tag) => {
        const isSelected = selectedTags.includes(tag);

        return (
          <button
            key={tag}
            type="button"
            onClick={() => onToggleTag(tag)}
            className={
              "filter-button" + (isSelected ? " filter-button--active" : "")
            }
            aria-pressed={isSelected}
          >
            #{tag}
          </button>
        );
      })}
    </section>
  );
};