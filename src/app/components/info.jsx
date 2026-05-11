


export default function Info (props) {
    return(
    <section className="info-ip">
        <dl>
          <div>
            <dt>Endereço IP</dt>
            <dd>{props.ip}</dd>
          </div>

          <div>
            <dt>Localização</dt>
            <dd>{props.regionName}</dd>
          </div>

          <div>
            <dt>Fuso horário</dt>
            <dd>{props.timezone}</dd>
          </div>

          <div>
            <dt>ISP</dt>
            <dd>{props.isp}</dd>
          </div>
        </dl>
    </section>
    )
    
}