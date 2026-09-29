import { useEffect, useState } from 'react'
import './Dashboard.css'

const STORAGE_KEY = 'waypoint-logistics-demo'
const statuses = ['Pending', 'Assigned', 'Picked up', 'In transit', 'Delivered', 'Delayed']
const navigation = [
  { label: 'Overview', code: 'OV' },
  { label: 'Orders', code: 'OR' },
  { label: 'Tracking', code: 'TR' },
  { label: 'Drivers', code: 'DR' },
  { label: 'Customers', code: 'CU' },
  { label: 'Team', code: 'TM' },
  { label: 'History', code: 'HI' },
  { label: 'Reports', code: 'RP' },
  { label: 'Notifications', code: 'NT' },
]

function createInitialData() {
  return {
    orders: [
      { id: 'WPT-24018', customer: 'Northstar Foods', origin: 'Mumbai, MH', destination: 'Bengaluru, KA', status: 'In transit', driverId: 'DRV-104', eta: 'Today, 18:30', placed: '29 Sep 2026', value: '₹18,400' },
      { id: 'WPT-24017', customer: 'Aster Medical', origin: 'Pune, MH', destination: 'Hyderabad, TS', status: 'Picked up', driverId: 'DRV-107', eta: 'Today, 21:15', placed: '29 Sep 2026', value: '₹12,800' },
      { id: 'WPT-24016', customer: 'Field & Form', origin: 'Delhi, DL', destination: 'Jaipur, RJ', status: 'Assigned', driverId: 'DRV-112', eta: 'Tomorrow, 10:00', placed: '28 Sep 2026', value: '₹8,250' },
      { id: 'WPT-24015', customer: 'Northstar Foods', origin: 'Chennai, TN', destination: 'Kochi, KL', status: 'Delayed', driverId: 'DRV-104', eta: 'Today, 23:40', placed: '28 Sep 2026', value: '₹21,600' },
      { id: 'WPT-24014', customer: 'Aster Medical', origin: 'Bengaluru, KA', destination: 'Mysuru, KA', status: 'Delivered', driverId: 'DRV-118', eta: 'Delivered, 11:42', placed: '27 Sep 2026', value: '₹6,900' },
      { id: 'WPT-24013', customer: 'Field & Form', origin: 'Ahmedabad, GJ', destination: 'Surat, GJ', status: 'Pending', driverId: '', eta: 'Tomorrow, 14:00', placed: '27 Sep 2026', value: '₹4,750' },
    ],
    drivers: [
      { id: 'DRV-104', name: 'Ravi Kumar', vehicle: 'MH 12 AB 4821', area: 'West region', status: 'On route' },
      { id: 'DRV-107', name: 'Meera Shah', vehicle: 'MH 14 CD 9012', area: 'South region', status: 'On route' },
      { id: 'DRV-112', name: 'Arjun Nair', vehicle: 'DL 01 EF 7743', area: 'North region', status: 'Available' },
      { id: 'DRV-118', name: 'Sana Iyer', vehicle: 'KA 03 GH 2316', area: 'South region', status: 'Available' },
    ],
    customers: [
      { name: 'Northstar Foods', email: 'logistics@northstar.example', city: 'Mumbai', orders: 38 },
      { name: 'Aster Medical', email: 'dispatch@aster.example', city: 'Pune', orders: 24 },
      { name: 'Field & Form', email: 'ops@fieldform.example', city: 'Delhi', orders: 17 },
      { name: 'Juniper Supply Co.', email: 'team@juniper.example', city: 'Bengaluru', orders: 11 },
    ],
    users: [
      { name: 'Alex Morgan', email: 'alex.morgan@waypoint.demo', role: 'Administrator', status: 'Active' },
      { name: 'Priya Desai', email: 'priya.desai@waypoint.demo', role: 'Dispatcher', status: 'Active' },
      { name: 'Ravi Kumar', email: 'ravi.kumar@waypoint.demo', role: 'Driver', status: 'Active' },
    ],
    notifications: [
      { id: 1, title: 'Shipment delayed', detail: 'WPT-24015 is running 35 minutes behind schedule.', time: '12 min ago', read: false },
      { id: 2, title: 'Delivery completed', detail: 'WPT-24014 was delivered in Mysuru.', time: '1 hour ago', read: false },
      { id: 3, title: 'Driver assigned', detail: 'Arjun Nair was assigned to WPT-24016.', time: 'Yesterday', read: true },
    ],
  }
}

function loadDemoData(currentUser) {
  let data
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    data = saved ? { ...createInitialData(), ...JSON.parse(saved) } : createInitialData()
  } catch {
    data = createInitialData()
  }

  if (currentUser?.role === 'Customer' && currentUser.email && !data.customers.some((customer) => customer.email === currentUser.email)) {
    data.customers = [...data.customers, { name: currentUser.name, email: currentUser.email, city: currentUser.company, orders: 0 }]
  }

  return data
}

function statusClass(status) {
  return `status-pill status-${status.toLowerCase().replaceAll(' ', '-')}`
}

function PageHeading({ eyebrow, title, detail, action }) {
  return (
    <div className="page-heading">
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-detail">{detail}</p>
      </div>
      {action}
    </div>
  )
}

function OrdersTable({ orders, drivers, onUpdate, editable = false }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr><th>Shipment</th><th>Customer</th><th>Route</th><th>Driver</th><th>Status</th><th>ETA</th></tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td><strong className="order-id">{order.id}</strong><span className="cell-subtitle">{order.placed}</span></td>
              <td>{order.customer}</td>
              <td><span className="route-cell">{order.origin}<span>to</span>{order.destination}</span></td>
              <td>{editable ? <select aria-label={`Assign driver for ${order.id}`} className="table-select" onChange={(event) => onUpdate(order.id, 'driverId', event.target.value)} value={order.driverId}><option value="">Unassigned</option>{drivers.map((driver) => <option key={driver.id} value={driver.id}>{driver.name}</option>)}</select> : drivers.find((driver) => driver.id === order.driverId)?.name || 'Unassigned'}</td>
              <td>{editable ? <select aria-label={`Update status for ${order.id}`} className={`table-select ${statusClass(order.status)}`} onChange={(event) => onUpdate(order.id, 'status', event.target.value)} value={order.status}>{statuses.map((status) => <option key={status}>{status}</option>)}</select> : <span className={statusClass(order.status)}>{order.status}</span>}</td>
              <td>{order.eta}</td>
            </tr>
          ))}
          {orders.length === 0 && <tr><td className="empty-cell" colSpan="6">No shipments match this view.</td></tr>}
        </tbody>
      </table>
    </div>
  )
}

function Dashboard({ currentUser, onLogout }) {
  const [data, setData] = useState(() => loadDemoData(currentUser))
  const [activePage, setActivePage] = useState('Overview')
  const [role, setRole] = useState(currentUser?.role || 'Administrator')
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [showDriverForm, setShowDriverForm] = useState(false)
  const [showCustomerForm, setShowCustomerForm] = useState(false)
  const [showUserForm, setShowUserForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('WPT-24018')
  const [toast, setToast] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data])

  useEffect(() => {
    if (!toast) return undefined
    const timer = window.setTimeout(() => setToast(''), 2800)
    return () => window.clearTimeout(timer)
  }, [toast])

  const unreadCount = data.notifications.filter((item) => !item.read).length
  const deliveredCount = data.orders.filter((order) => order.status === 'Delivered').length
  const activeCount = data.orders.filter((order) => ['Assigned', 'Picked up', 'In transit'].includes(order.status)).length
  const visibleNavigation = navigation.filter((item) => {
    if (role === 'Customer') return ['Overview', 'Tracking', 'History', 'Notifications'].includes(item.label)
    if (role === 'Driver') return ['Overview', 'Orders', 'Tracking', 'History', 'Notifications'].includes(item.label)
    return true
  })

  function updateOrder(orderId, field, value) {
    setData((current) => ({ ...current, orders: current.orders.map((order) => order.id === orderId ? { ...order, [field]: value, ...(field === 'driverId' && value && order.status === 'Pending' ? { status: 'Assigned' } : {}) } : order) }))
    setToast(field === 'driverId' ? 'Shipment assignment updated.' : 'Delivery status updated.')
  }

  function handleCreateOrder(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const newOrder = {
      id: `WPT-${String(Date.now()).slice(-5)}`,
      customer: form.get('customer'), origin: form.get('origin'), destination: form.get('destination'),
      status: 'Pending', driverId: '', eta: form.get('eta') || 'To be confirmed',
      placed: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      value: form.get('value') ? `₹${Number(form.get('value')).toLocaleString('en-IN')}` : 'To be quoted',
    }
    setData((current) => ({ ...current, orders: [newOrder, ...current.orders] }))
    setShowOrderForm(false)
    setToast(`${newOrder.id} created.`)
  }

  function handleAddDriver(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name')
    const id = `DRV-${String(Date.now()).slice(-3)}`
    setData((current) => ({ ...current, drivers: [...current.drivers, { id, name, vehicle: form.get('vehicle'), area: form.get('area'), status: 'Available' }], users: [...current.users, { name, email: form.get('email'), role: 'Driver', status: 'Active' }] }))
    setShowDriverForm(false)
    setToast(`${name} added to the driver roster.`)
  }

  function handleAddCustomer(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const customer = { name: form.get('name'), email: form.get('email'), city: form.get('city'), orders: 0 }
    setData((current) => ({ ...current, customers: [customer, ...current.customers] }))
    setShowCustomerForm(false)
    setToast(`${customer.name} added.`)
  }

  function handleAddUser(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const user = { name: form.get('name'), email: form.get('email'), role: form.get('role'), status: 'Invited' }
    setData((current) => ({ ...current, users: [user, ...current.users] }))
    setShowUserForm(false)
    setToast(`Invitation prepared for ${user.name}.`)
  }

  function changePage(page) {
    setActivePage(page)
    setShowOrderForm(false)
    setShowDriverForm(false)
    setShowCustomerForm(false)
    setShowUserForm(false)
  }

  function renderOverview() {
    const metrics = [
      { label: 'Active shipments', value: activeCount.toLocaleString(), note: 'Across all service lanes', accent: 'green' },
      { label: 'Delivered today', value: String(deliveredCount).padStart(2, '0'), note: 'In this demo dataset', accent: 'orange' },
      { label: 'Available drivers', value: String(data.drivers.filter((driver) => driver.status === 'Available').length).padStart(2, '0'), note: `of ${data.drivers.length} on the roster`, accent: 'lime' },
      { label: 'On-time rate', value: '98.6%', note: 'Rolling 30-day average', accent: 'blue' },
    ]
    return <><PageHeading eyebrow="TUESDAY, 29 SEPTEMBER 2026" title="Operations overview" detail="A clear view of what is moving and what needs attention." action={<button className="primary-action" onClick={() => { changePage('Orders'); setShowOrderForm(true) }} type="button"><span>+</span> New shipment</button>} /><div className="demo-notice"><span className="notice-tag">DEMO DATA</span> Changes are saved in this browser only. Authentication, live tracking, email and server sync are not connected.</div><div className="metric-grid">{metrics.map((metric) => <article className={`metric-card metric-${metric.accent}`} key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong><small>{metric.note}</small></article>)}</div><section className="content-panel overview-orders"><div className="panel-heading"><div><h2>Recent shipments</h2><p>Your latest delivery activity</p></div><button className="quiet-action" onClick={() => changePage('Orders')} type="button">View all <span>→</span></button></div><OrdersTable drivers={data.drivers} onUpdate={updateOrder} orders={data.orders.slice(0, 4)} /></section><div className="overview-bottom"><section className="content-panel attention-panel"><div className="panel-heading"><div><h2>Needs attention</h2><p>Items to review today</p></div><span className="attention-count">{data.orders.filter((order) => order.status === 'Delayed').length}</span></div>{data.orders.filter((order) => order.status === 'Delayed').map((order) => <button className="attention-row" key={order.id} onClick={() => { setSearchTerm(order.id); changePage('Tracking') }} type="button"><span className="attention-mark">!</span><span><strong>{order.id} · {order.customer}</strong><small>{order.origin} to {order.destination} · {order.eta}</small></span><span>→</span></button>)}{!data.orders.some((order) => order.status === 'Delayed') && <p className="quiet-empty">No delayed shipments right now.</p>}</section><section className="content-panel activity-panel"><div className="panel-heading"><div><h2>Network pulse</h2><p>Shipment volume this week</p></div><span className="panel-period">7 DAYS</span></div><div className="mini-chart" aria-label="Shipment volume chart">{[42, 62, 53, 78, 67, 89, 73].map((height, index) => <div className="chart-day" key={index}><span className={index === 5 ? 'chart-bar chart-bar-current' : 'chart-bar'} style={{ height: `${height}%` }} /><small>{['W', 'T', 'F', 'S', 'S', 'M', 'T'][index]}</small></div>)}</div></section></div></>
  }

  function renderOrdersPage() {
    const filter = statuses.includes(searchTerm) ? searchTerm : '__all__'
    const shownOrders = filter === '__all__' ? data.orders : data.orders.filter((order) => order.status === filter)
    return <><PageHeading eyebrow="FULFILMENT" title="Delivery orders" detail="Create shipments, assign drivers, and keep every delivery moving." action={<button className="primary-action" onClick={() => setShowOrderForm((show) => !show)} type="button"><span>+</span> Create order</button>} />{showOrderForm && <form className="create-panel" onSubmit={handleCreateOrder}><div className="create-panel-heading"><div><h2>New delivery order</h2><p>Enter the shipment details to add it to your queue.</p></div><button className="close-form" onClick={() => setShowOrderForm(false)} type="button" aria-label="Close form">×</button></div><div className="form-grid"><label>Customer<select name="customer" required>{data.customers.map((customer) => <option key={customer.email}>{customer.name}</option>)}</select></label><label>Origin<input name="origin" placeholder="City, state" required /></label><label>Destination<input name="destination" placeholder="City, state" required /></label><label>Estimated delivery<input name="eta" placeholder="e.g. Tomorrow, 14:00" /></label><label>Declared value<input name="value" min="0" placeholder="₹ amount" type="number" /></label></div><button className="primary-action" type="submit">Create shipment <span>→</span></button></form>}<section className="content-panel"><div className="panel-heading panel-heading-wrap"><div><h2>All shipments <span className="heading-count">{data.orders.length}</span></h2><p>Update status or assign an available driver inline.</p></div><label className="filter-control">Status <select value={filter} onChange={(event) => setSearchTerm(event.target.value)}><option value="__all__">All statuses</option>{statuses.map((status) => <option key={status} value={status}>{status}</option>)}</select></label></div><OrdersTable drivers={data.drivers} onUpdate={updateOrder} orders={shownOrders} editable /></section></>
  }

  function renderTrackingPage() {
    const query = searchTerm.trim().toLowerCase()
    const trackedOrder = data.orders.find((order) => order.id.toLowerCase() === query || order.customer.toLowerCase().includes(query))
    const steps = ['Pending', 'Assigned', 'Picked up', 'In transit', 'Delivered']
    const activeStep = trackedOrder ? steps.indexOf(trackedOrder.status) : -1
    return <><PageHeading eyebrow="CUSTOMER EXPERIENCE" title="Track a shipment" detail="Look up a delivery by tracking number or customer name." /><section className="track-search-panel"><label htmlFor="tracking-search">Tracking number or customer</label><div><input id="tracking-search" onChange={(event) => setSearchTerm(event.target.value)} placeholder="e.g. WPT-24018" value={searchTerm} /><button className="primary-action" type="button">Find shipment <span>→</span></button></div></section>{trackedOrder ? <section className="tracking-result content-panel"><div className="tracking-result-top"><div><span className="section-eyebrow">SHIPMENT {trackedOrder.id}</span><h2>{trackedOrder.customer}</h2><p>{trackedOrder.origin} <span>→</span> {trackedOrder.destination}</p></div><span className={statusClass(trackedOrder.status)}>{trackedOrder.status}</span></div><div className="tracking-route"><div className="tracking-endpoint"><span className="endpoint-dot" /><small>ORIGIN</small><strong>{trackedOrder.origin}</strong></div><div className="tracking-progress"><div className="progress-track"><span style={{ width: `${Math.max(8, ((activeStep + 1) / steps.length) * 100)}%` }} /></div><small>{trackedOrder.status === 'Delivered' ? 'DELIVERED' : `ESTIMATED ARRIVAL · ${trackedOrder.eta.toUpperCase()}`}</small></div><div className="tracking-endpoint"><span className="endpoint-dot endpoint-destination" /><small>DESTINATION</small><strong>{trackedOrder.destination}</strong></div></div><div className="timeline">{steps.map((step, index) => <div className={`timeline-step ${index <= activeStep ? 'is-complete' : ''}`} key={step}><span className="timeline-marker">{index < activeStep ? '✓' : String(index + 1).padStart(2, '0')}</span><span><strong>{step}</strong><small>{index === activeStep ? 'Current update' : index < activeStep ? 'Complete' : 'Awaiting update'}</small></span></div>)}</div></section> : <div className="empty-state content-panel"><strong>No shipment found</strong><span>Try a tracking ID such as WPT-24018 or a customer name.</span></div>}</>
  }

  function renderDriversPage() {
    return <><PageHeading eyebrow="FLEET OPERATIONS" title="Drivers" detail="Manage the people and vehicles moving your network." action={<button className="primary-action" onClick={() => setShowDriverForm((show) => !show)} type="button"><span>+</span> Add driver</button>} />{showDriverForm && <form className="create-panel" onSubmit={handleAddDriver}><div className="create-panel-heading"><div><h2>Add a driver</h2><p>Roster and invitation changes are saved to this browser.</p></div><button className="close-form" onClick={() => setShowDriverForm(false)} type="button" aria-label="Close form">×</button></div><div className="form-grid"><label>Full name<input name="name" required /></label><label>Work email<input name="email" type="email" required /></label><label>Vehicle registration<input name="vehicle" required /></label><label>Service region<input name="area" placeholder="e.g. West region" required /></label></div><button className="primary-action" type="submit">Add to roster <span>→</span></button></form>}<div className="driver-grid">{data.drivers.map((driver) => { const assigned = data.orders.filter((order) => order.driverId === driver.id && order.status !== 'Delivered').length; return <article className="driver-card" key={driver.id}><div className="driver-card-top"><span className="driver-avatar">{driver.name.split(' ').map((part) => part[0]).join('')}</span><span className={`availability ${driver.status === 'Available' ? 'is-available' : driver.status === 'On route' ? 'is-on-route' : ''}`}>{driver.status}</span></div><h2>{driver.name}</h2><p className="driver-id">{driver.id} · {driver.area}</p><div className="driver-card-meta"><span>VEHICLE<strong>{driver.vehicle}</strong></span><span>ACTIVE LOADS<strong>{assigned}</strong></span></div><label className="driver-status-control">Availability<select aria-label={`Availability for ${driver.name}`} onChange={(event) => setData((current) => ({ ...current, drivers: current.drivers.map((item) => item.id === driver.id ? { ...item, status: event.target.value } : item) }))} value={driver.status}><option>Available</option><option>On route</option><option>Off duty</option></select></label></article> })}</div></>
  }

  function renderCustomersPage() {
    return <><PageHeading eyebrow="CUSTOMER DIRECTORY" title="Customers" detail="View customer accounts and their delivery activity." action={<button className="primary-action" onClick={() => setShowCustomerForm((show) => !show)} type="button"><span>+</span> Add customer</button>} />{showCustomerForm && <form className="create-panel" onSubmit={handleAddCustomer}><div className="create-panel-heading"><div><h2>New customer</h2><p>Customer details stay in the local demo dataset.</p></div><button className="close-form" onClick={() => setShowCustomerForm(false)} type="button" aria-label="Close form">×</button></div><div className="form-grid"><label>Company name<input name="name" required /></label><label>Contact email<input name="email" type="email" required /></label><label>City<input name="city" required /></label></div><button className="primary-action" type="submit">Add customer <span>→</span></button></form>}<section className="content-panel"><div className="panel-heading"><div><h2>Customer accounts <span className="heading-count">{data.customers.length}</span></h2><p>Delivery partners across your network</p></div></div><div className="table-wrap"><table className="data-table"><thead><tr><th>Company</th><th>Contact</th><th>Location</th><th>Total orders</th><th>Account</th></tr></thead><tbody>{data.customers.map((customer) => <tr key={customer.email}><td><strong>{customer.name}</strong></td><td>{customer.email}</td><td>{customer.city}</td><td>{customer.orders}</td><td><span className="status-pill status-delivered">Active</span></td></tr>)}</tbody></table></div></section></>
  }

  function renderTeamPage() {
    return <><PageHeading eyebrow="ACCESS CONTROL" title="Team & access" detail="Manage demo workspace roles. Production access requires a secure identity provider." action={<button className="primary-action" onClick={() => setShowUserForm((show) => !show)} type="button"><span>+</span> Invite user</button>} />{showUserForm && <form className="create-panel" onSubmit={handleAddUser}><div className="create-panel-heading"><div><h2>Invite a teammate</h2><p>This prepares a local demo invite; no email will be sent.</p></div><button className="close-form" onClick={() => setShowUserForm(false)} type="button" aria-label="Close form">×</button></div><div className="form-grid"><label>Full name<input name="name" required /></label><label>Work email<input name="email" type="email" required /></label><label>Workspace role<select name="role"><option>Dispatcher</option><option>Driver</option><option>Administrator</option></select></label></div><button className="primary-action" type="submit">Prepare invite <span>→</span></button></form>}<section className="content-panel"><div className="panel-heading"><div><h2>Workspace members <span className="heading-count">{data.users.length}</span></h2><p>Permissions shown for demonstration only</p></div></div><div className="table-wrap"><table className="data-table"><thead><tr><th>Member</th><th>Email</th><th>Role</th><th>Access</th><th>Change role</th></tr></thead><tbody>{data.users.map((user) => <tr key={user.email}><td><strong>{user.name}</strong></td><td>{user.email}</td><td>{user.role}</td><td><span className={`status-pill ${user.status === 'Active' ? 'status-delivered' : 'status-assigned'}`}>{user.status}</span></td><td><select aria-label={`Role for ${user.name}`} className="table-select" onChange={(event) => setData((current) => ({ ...current, users: current.users.map((item) => item.email === user.email ? { ...item, role: event.target.value } : item) }))} value={user.role}><option>Administrator</option><option>Dispatcher</option><option>Driver</option><option>Customer</option></select></td></tr>)}</tbody></table></div></section></>
  }

  function renderHistoryPage() {
    const history = data.orders.filter((order) => order.status === 'Delivered')
    return <><PageHeading eyebrow="COMPLETED DELIVERIES" title="Delivery history" detail="A record of completed shipments in your workspace." /><section className="content-panel"><div className="panel-heading"><div><h2>Completed shipments <span className="heading-count">{history.length}</span></h2><p>Filter and export features can connect to your reporting service.</p></div><button className="quiet-action" onClick={() => setToast('Connect an export service to download delivery history.')} type="button">Export history <span>↗</span></button></div><OrdersTable drivers={data.drivers} onUpdate={updateOrder} orders={history} /></section></>
  }

  function renderReportsPage() {
    const counts = statuses.map((status) => ({ status, count: data.orders.filter((order) => order.status === status).length }))
    const maxCount = Math.max(1, ...counts.map((item) => item.count))
    return <><PageHeading eyebrow="NETWORK PERFORMANCE" title="Operational reports" detail="Service and fulfilment indicators from the current demo dataset." action={<span className="report-date">LAST 30 DAYS <span>⌄</span></span>} /><div className="report-metrics"><article className="report-summary"><span>On-time delivery</span><strong>98.6%</strong><small>+2.4% from previous period</small></article><article className="report-summary"><span>Shipments processed</span><strong>{Math.max(1284, data.orders.length)}</strong><small>Across all active lanes</small></article><article className="report-summary"><span>Average transit</span><strong>1.8 <small>days</small></strong><small>From pickup to delivery</small></article></div><div className="report-layout"><section className="content-panel report-status-panel"><div className="panel-heading"><div><h2>Orders by status</h2><p>Current shipment distribution</p></div></div><div className="status-bars">{counts.map((item) => <div className="status-bar-row" key={item.status}><span>{item.status}</span><div className="status-bar-track"><span style={{ width: `${(item.count / maxCount) * 100}%` }} /></div><strong>{item.count}</strong></div>)}</div></section><section className="content-panel report-routes-panel"><div className="panel-heading"><div><h2>Top customer lanes</h2><p>Shipment volume by origin</p></div></div>{['Mumbai → Bengaluru', 'Pune → Hyderabad', 'Delhi → Jaipur', 'Chennai → Kochi'].map((route, index) => <div className="top-route" key={route}><span className="route-rank">0{index + 1}</span><span>{route}</span><strong>{[38, 27, 19, 14][index]}</strong></div>)}</section></div></>
  }

  function renderNotificationsPage() {
    return <><PageHeading eyebrow="ACTIVITY CENTER" title="Notifications" detail="Shipment and workspace events collected in this demo." action={<button className="quiet-action" onClick={() => setData((current) => ({ ...current, notifications: current.notifications.map((item) => ({ ...item, read: true })) }))} type="button">Mark all as read <span>✓</span></button>} /><section className="content-panel notification-list"><div className="panel-heading"><div><h2>Recent activity <span className="heading-count">{unreadCount} new</span></h2><p>Notifications are local to this browser.</p></div></div>{data.notifications.map((item) => <article className={`notification-row ${item.read ? '' : 'is-unread'}`} key={item.id}><span className="notification-dot" /><div><strong>{item.title}</strong><p>{item.detail}</p><small>{item.time}</small></div>{!item.read && <button className="mark-read" onClick={() => setData((current) => ({ ...current, notifications: current.notifications.map((notification) => notification.id === item.id ? { ...notification, read: true } : notification) }))} type="button">Mark read</button>}</article>)}</section></>
  }

  const pageRenderers = { Overview: renderOverview, Orders: renderOrdersPage, Tracking: renderTrackingPage, Drivers: renderDriversPage, Customers: renderCustomersPage, Team: renderTeamPage, History: renderHistoryPage, Reports: renderReportsPage, Notifications: renderNotificationsPage }

  return <div className="ops-shell"><aside className="ops-sidebar"><button className="ops-brand" onClick={() => changePage('Overview')} type="button"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span>waypoint</span></button><div className="workspace-label">WORKSPACE <span>DEMO</span></div><nav className="ops-navigation" aria-label="Main navigation">{visibleNavigation.map((item) => <button className={`nav-item ${activePage === item.label ? 'is-active' : ''}`} key={item.label} onClick={() => changePage(item.label)} type="button"><span className="nav-code">{item.code}</span><span>{item.label}</span>{item.label === 'Notifications' && unreadCount > 0 && <span className="nav-count">{unreadCount}</span>}</button>)}</nav><div className="sidebar-bottom"><div className="system-status"><span /> SYSTEMS NORMAL<small>Demo environment</small></div><button className="logout-button" onClick={onLogout} type="button"><span>←</span> Sign out</button></div></aside><main className="ops-main"><header className="ops-topbar"><div className="breadcrumb"><span>Waypoint</span><span>/</span><strong>{activePage}</strong></div><div className="topbar-actions"><button aria-label="Open notifications" className="topbar-notification" onClick={() => changePage('Notifications')} type="button">NT{unreadCount > 0 && <i />}</button><label className="role-switch"><span>VIEW AS</span><select aria-label="Preview workspace role" onChange={(event) => setRole(event.target.value)} value={role}><option>Administrator</option><option>Dispatcher</option><option>Driver</option><option>Customer</option></select></label><div className="user-chip"><span className="user-avatar">{currentUser?.name?.split(' ').map((part) => part[0]).join('').slice(0, 2) || 'AM'}</span><span><strong>{currentUser?.name || 'Alex Morgan'}</strong><small>{role}</small></span></div></div></header><div className="ops-content"><div className="content-inner">{pageRenderers[activePage]?.() || renderOverview()}</div><footer className="ops-footer"><span>WAYPOINT LOGISTICS CLOUD</span><span>FRONTEND PROTOTYPE · LOCAL DEMO DATA</span></footer></div></main>{toast && <div className="toast-message" role="status"><span>✓</span>{toast}</div>}</div>
}

export default Dashboard