function HowItWorkItem({ detail }) {
  return (
    <div>
      <div className="item-header">
        <p className="item-id">{detail.id}</p>
        <div className={detail.class} />
      </div>
      <div className='item-footer'>
        <p className="item-title">{detail.title}</p>
        <p className="item-info">{detail.info}</p>
      </div>
    </div>
  );
}

export default HowItWorkItem;
