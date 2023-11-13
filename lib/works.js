import bandInfo from '/lib/data.json'

export const getAllBandIds = () =>
    bandInfo.collection1.map((bandlist) => ({
        params: {
            id: bandlist.id,
        },
    }))

export const getBandData = (id) => bandInfo.collection1.find((band) => band.id === id)
