import { TonApiLayout } from 'tonapi-web/components/tonapi/Layout';
import { SwaggerFragment } from 'tonapi-web/fragments/tonapi/SwaggerFragment';

export default function SwaggerPage() {
  return (
    <TonApiLayout>
      <SwaggerFragment url="https://tonapi.io/v2/openapi.yml" />
    </TonApiLayout>
  );
}
