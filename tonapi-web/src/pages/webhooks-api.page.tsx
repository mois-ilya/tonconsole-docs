import { TonApiLayout } from 'tonapi-web/components/tonapi/Layout';
import { SwaggerFragment } from 'tonapi-web/fragments/tonapi/SwaggerFragment';

const SWAGGER_YAML_URL = 'https://raw.githubusercontent.com/tonkeeper/opentonapi/refs/heads/master/api/rt.yml';

export default function SwaggerPage() {
  return (
    <TonApiLayout>
      <SwaggerFragment url={SWAGGER_YAML_URL}/>
    </TonApiLayout>
  );
}
