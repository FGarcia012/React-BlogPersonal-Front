export const PublicationToolbar = ({search, setSearch}) => (
    <div className="toolbar">
        <input
            type="text"
            placeholder="Buscar por título..."
            className="search-input"
            value={search}
            onChange={(send) => setSearch(send.target.value)}
        />
    </div>
)