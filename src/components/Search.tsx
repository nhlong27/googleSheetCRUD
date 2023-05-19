
const Search = ({queryTitle, setQueryTitle}: {queryTitle: string, setQueryTitle:  React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div className='flex justify-start w-full px-4 py-2 rounded-lg my-4 bg-stone-100 shadow-lg text-lg text-stone-600 gap-4 font-bold dark:bg-stone-900  dark:rounded-none dark:text-yellow-400 h-[4rem]'>
        <div className=''>
          <h1 className='flex px-4 py-2 hover:bg-stone-300 rounded-xl gap-2 items-center dark:hover:bg-stone-900 dark:hover:text-yellow-300 dark:hover:shadow-yellow-200 dark:hover:shadow-sm'>
            Search
          </h1>
        </div>
        <div
          className={`transition-full grow duration-300 overflow-hidden flex `}
        >
          <input
            type='text'
            className='grow bg-stone-300 shadow-inner rounded-2xl pl-4 dark:bg-stone-900 dark:rounded-none dark:border-b-4 dark:border-yellow-400'
            value={queryTitle}
            onChange={(e) => {
              setQueryTitle(e.currentTarget.value);
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        
      </div>
  )
}

export default Search