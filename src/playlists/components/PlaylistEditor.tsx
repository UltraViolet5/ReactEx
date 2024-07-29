import React from 'react'

type Props = {}

const PlaylistEditor = (props: Props) => {
  const playlist = {
    id: "123",
    name: "Playlist 123",
    public: false,
    description: "Cool playlist",
  };

  return (
    <div>
      <div className="grid gap-3">
        <div className="grid">
          <label>Name</label>
          <input type="text" />
        </div>

        <div className="grid ">
          <label className='flex gap-2 items-center'> <input type="checkbox"/> Public</label>

        </div>
        <div className="grid">
          <label>Description</label>
          <textarea/>
        </div>
      </div>
    </div>
  )
}

export default PlaylistEditor