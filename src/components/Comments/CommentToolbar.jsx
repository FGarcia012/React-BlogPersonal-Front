export const CommentToolbar = ({search, setSearch, onAddClick}) => (
    <div className="toolbar">
        <input
            type="text"
            placeholder="Buscar por nombre..."
            className="search-input"
            value={search}
            onChange={(send) => setSearch(send.target.value)}
        />
    </div>
)