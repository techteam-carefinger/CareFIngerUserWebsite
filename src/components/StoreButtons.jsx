const STORES = [
  {
    name: 'Google Play',
    kicker: 'Download on',
    href: 'https://play.google.com/store/apps',
  },
  {
    name: 'App Store',
    kicker: 'Download on',
    href: 'https://www.apple.com/app-store/',
  },
]

export default function StoreButtons() {
  return (
    <div className="store-row">
      {STORES.map((store) => (
        <a key={store.name} className="store" href={store.href} target="_blank" rel="noreferrer">
          <small>{store.kicker}</small>
          <strong>{store.name}</strong>
        </a>
      ))}
    </div>
  )
}
