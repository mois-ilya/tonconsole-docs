import React from 'react';
import Link from 'next/link';
import { css } from '@linaria/core';
import { Body2, Title2, Label1 } from 'tonapi-web/utils/textStyles';

const content = css`
  display: flex;
  flex-direction: column;
  padding-top: 32px;

  & a {
    text-decoration: underline;
    color: var(--accentBlue);
  }
`;

const uppercase = css`
  text-transform: uppercase;
  font-weight: 500;
`;

const list = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style-type: initial;
  margin-top: 8px;
  margin-left: 32px;
`;

export const TermsFragment = React.memo(() => {
  return (
    <div className={content}>
      <h2 className={Title2}>API terms of use</h2>
      <br />
      <p className={Body2}>Last updated on Sep 12, 2025</p>
      <br />
      <br />
      <h3 className={`${Label1} ${uppercase}`}>
        Please read these api terms of use carefully before using the api. By using the api, you agree to be bound by
        these api terms of use. If you do not agree to these api terms of use you must not use our api for any purpose
        whatsoever.
      </h3>
      <br />
      <p className={Body2}>
        In these <b>API Terms of Use</b>, <b>We</b>, <b>Our</b>, <b>Ourselves</b>, <b>Us</b> or <b>API Licensor</b>{' '}
        means SCALABLE DATA SOLUTIONS INC (a company incorporated and registered in RAK DAO, UAE with registration
        number 01010497 whose registered office is at Office A, RAK DAO Business Centre, RAK BANK ROC Office, Ground
        Floor, Al Rifaa, Sheikh Mohammed Bin Zayed Road, Ras Al Khaimah, United Arab Emirates) and <b>You</b>,{' '}
        <b>Your</b> or <b>API Licensee</b> means you (and if you are using the API on behalf of a legal person, business
        or other organisation (<b>Organisation</b>) includes you and also such Organisation).
      </p>
      <br />
      <p className={Body2}>
        By using the API on behalf of any Organisation, You represent and warrant (<b>promise</b>) that You have all
        necessary capacity and authority to enter into these API Terms of Use on behalf of such Organisation as a
        legally binding contract between such Organisation and Us in all applicable jurisdictions and that the
        Organisation enters into such contract.
      </p>
      <p>
        The API and these API Terms of Use are intended solely for use by businesses and business entities in a
        commercial context and are not offered to or intended for individual consumers or personal use. Accordingly,
        consumer protection laws, including but not limited to the UAE Federal Law No. 15 of 2020 on Consumer Protection
        (or any equivalent laws in applicable jurisdictions), shall not apply to these API Terms of Use or Your use of
        the API.
      </p>
      <br />
      <p className={Body2}>
        We may update these API Terms of Use, these terms of use, our Data Protection and Privacy Policy (referred to
        below) and any of the policies or other documents referred to in them from time to time by notifying You by any
        other reasonable means. Such updates shall take effect within 10 days after details of them are updated (or, if
        earlier, of You otherwise being notified of the update). Please check our app regularly for details of updates.
        If You do not agree to any such update, You should stop using the API and API Data before the update takes
        effect.
      </p>
      <br />
      <br />
      <h3 className={Label1}>Our API and how We work with developers</h3>
      <br />
      <p className={Body2}>
        Our application programming interface (<strong>API</strong>) can be accessed at{' '}
        <Link href="https://tonconsole.com/">https://tonconsole.com/</Link> and includes any documents (electronic or
        otherwise) that come with the API. Our API is intended to be used as an interface between: (a) our platform
        built on a blockchain system, which allows users to store their private keys, interact with our blockchain and
        conduct cryptocurrency transactions, streaming services and any other features, content, or applications offered
        or operated by Us from time to time whether accessed via the internet, mobile device or other electronic device
        (<strong>Platform</strong>); and (b) the applications or services provided by You through Your software and
        cloud services (<strong>Application</strong>).
      </p>
      <p className={Body2} style={{ marginTop: 12 }}>
        As part of use of the API, You may access or otherwise use on Our Platform certain content, images, photographs,
        illustrations, icons, texts, video, audio, written materials, software or other content, materials or data made
        available via the API (<strong>API Data</strong>).
      </p>
      <br />
      <br />
      <h3 className={Label1}>These API Terms of Use</h3>
      <br />
      <p className={Body2}>
        The main things that We care about are that each of Our Platform, the rights of Our end users and Our API is
        protected.
      </p>
      <br />
      <p className={Body2}>
        These API Terms of Use set out Our and Your respective rights and obligations relating to the use of Our APIs to
        interface between Our Platform and Your Application and use of the API Data.
      </p>
      <br />
      <p className={Body2}>
        Your use of any of Our other products or services on Our Platform will be on different terms and conditions. If,
        and only so far as, these API Terms of Use and the terms and conditions applicable to Our other products or
        services are inconsistent as to the terms applicable to the use of Our API, the terms and conditions applicable
        to Our other products or services shall apply (and these API Terms of Use shall not).
      </p>
      <br />
      <p className={Body2}>
        If these API Terms of Use do not specifically say that You can do something in connection with the API, the API
        Data or the Platform, then You cannot.
      </p>
      <br />
      <br />
      <h3 className={Label1}>Access to the API</h3>
      <br />
      <p className={Body2}>You agree:</p>
      <ol className={list}>
        <li className={Body2}>to access the API only using the API key that We give You;</li>
        <li className={Body2}>
          to keep Your API key secure and that You are responsible for any use of the API using Your key; and
        </li>
        <li className={Body2}>
          that end users shall not be prompted to provide any passwords, usernames or other login details that they use
          to access the Platform directly to You. However, such details may be stored within the API.
        </li>
      </ol>
      <br />
      <h3 className={Label1}>How You may use the API</h3>
      <br />
      <p className={Body2}>You must:</p>
      <ol className={list}>
        <li className={Body2}>
          obtain end user consent to allow the Application to access the Platform through the API; and
        </li>
        <li className={Body2}>
          ensure that Your use of the API complies with:
          <ol className={list}>
            <li className={Body2}>these API Terms of Use and API Privacy Policy;</li>
            <li className={Body2}>
              all documentation relating to the API and/or Platform provided or made available by Us to You (
              <strong>Documentation</strong>) (as updated from time to time);
            </li>
            <li className={Body2}>any terms applicable to Your Application;</li>
            <li className={Body2}>any terms applicable to the Platform;</li>
            <li className={Body2}>any other terms agreed between Us and You; and</li>
            <li className={Body2}>
              all relevant legislation, regulations, codes of practice, guidance and other requirements of any relevant
              jurisdiction, government or regulatory agency or other regulatory body.
            </li>
          </ol>
        </li>
      </ol>
      <br />
      <h3 className={Label1}>What the API must not be used for</h3>
      <br />
      <p className={Body2}>
        You must not use the API to send spam or to interfere with or degrade Our services in any way.
      </p>
      <br />
      <p className={Body2}>
        You must also not use the API for any unlawful purpose or activity whatsoever, including fraud or terrorism, or
        to promote any unlawful act, or in any way which:
      </p>
      <ol className={list}>
        <li className={Body2}>makes any private information on the Platform publicly available on the Application;</li>
        <li className={Body2}>causes or is intended to cause annoyance, inconvenience or needless anxiety;</li>
        <li className={Body2}>
          is abusive, harmful, threatening or defamatory or may otherwise cause offence (including uploading any
          material that contains a virus or other malicious code);
        </li>
        <li className={Body2}>
          does or could potentially breach a legal duty to anyone else (including a duty of confidentiality) or infringe
          a person's right to privacy;
        </li>
        <li className={Body2}>promotes discrimination or is likely to incite hatred; or</li>
        <li className={Body2}>
          may infringe the intellectual property rights (e.g. copyright, trademarks, service marks, patents, database
          rights, know-how, design rights, domain names, know-how and rights in software (registered or not)) or any
          other rights of anyone (including Ours).
        </li>
      </ol>
      <br />
      <p className={Body2}>You must also not:</p>
      <ol className={list}>
        <li className={Body2}>
          distribute, license, sell, rent, lease or otherwise deal in or encumber (like a guarantee, mortgage or
          security interest, for example) the API;
        </li>
        <li className={Body2}>modify, add to, or otherwise enhance the API;</li>
        <li className={Body2}>
          except as strictly necessary for You to integrate Our API with Your Application in a manner (and for such
          purposes) that comply at all times with these API Terms of Use, copy or decompile the API and shall not
          observe, study or test the functioning of the API (or any part of it), but only so far as the same cannot be
          restricted by law; or
        </li>
        <li className={Body2}>
          infringe or copy Our code or content or the design of Our Platform, the API and any of Our other intellectual
          property rights.
        </li>
      </ol>
      <br />
      <h3 className={Label1}>Licences to use the API and API Data</h3>
      <br />
      <p className={Body2}>
        We grant You a non-exclusive, revocable and non-transferable licence, without a right to sublicense to end
        users, to use and to permit Your end users to use, the API for the services rendered via the Platform and
        subject to the restrictions on use in these API Terms of Use. You must not commercially distribute the API.
      </p>
      <br />
      <p className={Body2}>
        The API licensed under these API Terms of Use shall not include any error corrections, patches, fixes, updates,
        upgrades, new releases or new versions subsequently received (if any) of the API. If the API licensed under
        these API Terms of Use includes a licence to error corrections, patches, fixes, updates, upgrades, new releases
        or new versions subsequently released by Us (<b>Releases</b>), You will implement and use such Releases as soon
        as possible and in any event in the time period specified by Us. We shall not be liable for any losses or claims
        arising out of or in connection with Your use of any prior iterations of the API after We make available any
        Releases to You.
      </p>
      <br />
      <p className={Body2}>
        We grant You a non-exclusive, revocable, and non-transferable licence, with a right to sublicense to end users,
        to download, copy, display, view and use the API Data for the purpose of using our Platform services, provided
        that You shall not:
      </p>
      <ol className={list}>
        <li className={Body2}>
          create permanent copies of the API Data except to the extent permitted by these API Terms of Use;
        </li>
        <li className={Body2}>
          remove, alter, or cover up any trademark, service mark, copyright and other proprietary notices contained in
          the API Data;
        </li>
        <li className={Body2}>
          without Our prior written consent, make derivative works of, or commercially distribute or otherwise exploit
          the API Data, or use the Platform or any API Data in a way that inaccurately suggests an association between
          You and Us or Our licensors; or
        </li>
        <li className={Body2}>
          otherwise use or exploit the API Data in any way for any purpose except as specifically permitted by these API
          Terms of Use or Our API Privacy Policy’, a copy of which is available on our Platform.
        </li>
      </ol>
      <br />
      <p className={Body2}>This means that:</p>
      <ol className={list}>
        <li className={Body2}>
          We can grant licences to anyone else (and retain rights to do things with the API and API Data Ourselves);
        </li>
        <li className={Body2}>We can decide to take the licences back from You; and</li>
        <li className={Body2}>
          You are not permitted to transfer Your rights to anyone else or to allow anyone else to use the API, the API
          Data or the Platform.
        </li>
      </ol>

      <br />
      <p className={Body2}>
        You accept that the API Data may contain third party intellectual property rights and You shall ensure that Your
        use of such API Data does not infringe those rights.
      </p>
      <br />
      <p className={Body2}>
        Except for Your right to use the API, Platform and API Data as specifically granted in these API Terms of Use,
        all intellectual property rights in and to the API, Platform and API Data are Ours and remain Ours (or Our
        licensors’).
      </p>
      <br />
      <p className={Body2}>
        If You acquire any intellectual property rights (e.g. copyright, trademarks, service marks, patents, database
        rights, know-how, design rights, domain names, know-how and rights in software (registered or not)) in the API,
        Platform or any API Data, You shall transfer these rights (both existing and future) with full title guarantee
        to Us or anyone else We nominate (or You will make this happen immediately). You shall sign all documentation
        and do such things as We think necessary to transfer those rights.
      </p>
      <br />
      <p className={Body2}>
        You accept and understand that the API and API Data contain confidential and proprietary information and You
        shall not conceal, modify, remove, destroy or alter in any way any of Our proprietary markings on or in the API,
        API Data or any related materials and documentation.
      </p>

      <br />
      <h3 className={Label1}>Data protection</h3>
      <br />
      <p className={Body2}>
        You and We shall at all times comply with our respective obligations under applicable data protection laws.
      </p>
      <p className={Body2}>
        You and We shall at all times comply with our respective obligations in our API Privacy Policy, which is
        incorporated into and forms part of these API Terms of Use.
      </p>
      <br />
      <h3 className={Label1}>API Licensor's rights</h3>
      <br />
      <p className={Body2}>
        We have the right at any time to access Your API account and to monitor Your use of Your API account to ensure
        You are complying with these API Terms of Use.
      </p>
      <br />
      <p className={Body2}>
        You grant Us a royalty-free, perpetual, irrevocable, non-exclusive, transferable licence to use, reproduce,
        copy, download, view modify, publish, edit, translate, distribute, perform, display and otherwise utilise any
        content or material that You provide to Us through the API including end user content or material and any data
        or analytics generated from the same, as set out in Our API Privacy Policy.
      </p>
      <br />
      <h3 className={Label1}>Our Marks</h3>
      <br />
      <p className={Body2}>
        All trademarks, logos and service marks (the <b>Marks</b>) which appear on the Platform or API are Our
        registered and unregistered Marks or are licensed for use by Us by the owners of those Marks.
      </p>
      <br />
      <p className={Body2}>Other Marks are proprietary marks and are registered to their respective owners.</p>
      <br />
      <p className={Body2}>
        Nothing contained on the Platform or API should be construed as granting any licence or right to use any Marks
        displayed on the Platform or API without Our written permission.
      </p>
      <br />
      <p className={Body2}>
        Misuse of any Mark displayed on the Platform or the API, or any other content on the Platform, except as
        provided herein, is strictly prohibited.
      </p>
      <br />
      <h3 className={Label1}>Confidentiality</h3>
      <br />
      <p className={Body2}>
        You shall keep Our confidential information confidential. This includes all information (of any kind and in any
        format and coming into Your knowledge, possession or control in any way) relating to Our business, finance or
        technology, know-how, intellectual property rights, assets, strategy, products and other customers, where the
        information is identified as confidential at the time of disclosure or ought reasonably to be considered
        confidential given its nature or how it was disclosed (<b>Confidential Information</b>).
      </p>
      <br />
      <p className={Body2}>
        You shall only use Our Confidential Information to use, and undertake development work with, the API, and will
        give Us notice of any unauthorised misuse, disclosure, theft or loss of Our Confidential Information immediately
        upon becoming aware of this.
      </p>
      <br />
      <p className={Body2}>
        You shall not without Our prior written consent use, disclose, copy or modify Our Confidential Information (or
        permit others to do so) other than as is strictly necessary for You to be able to do what You are permitted
        and/or required to do under these API Terms of Use.
      </p>
      <br />
      <p className={Body2}>
        You may disclose Our Confidential Information to Your officers, employees, agents, professional advisers and
        contractors (and permit them to use, copy or modify Our Confidential Information) as is strictly necessary for
        You to be able to do what You are permitted and/or required to do under these API Terms of Use. Where disclosure
        to Your officers, employees, agents, professional advisers and contractors is necessary, You shall ensure such
        persons are made aware of and agree in writing to observe these same confidentiality obligations and at all
        times comply with them.
      </p>
      <br />
      <p className={Body2}>
        You may disclose Our Confidential Information as required by law. In the event that You become legally compelled
        to disclose any of the Confidential Information, then (to the extent permitted by law) You shall give Us prompt
        written notice of the fact so that We may take such steps to prevent such disclosure as We deem appropriate and
        You shall co-operate with Us in such manner as We may reasonably require.
      </p>
      <br />
      <h3 className={Label1}>Promises and disclaimers</h3>
      <br />
      <p className={Body2}>You promise that:</p>
      <ol className={list}>
        <li className={Body2}>
          You hold all rights and have obtained all licences required to use the API integration You develop and the API
          Data; and
        </li>
        <li className={Body2}>
          Your use of the API will not infringe Our rights or anyone else's, nor will it breach any applicable laws or
          regulations.
        </li>
      </ol>
      <br />
      <p className={Body2}>
        To the maximum extent permitted by applicable law, You accept that the API is provided on an 'AS IS' basis and
        that:
      </p>
      <ol className={list}>
        <li className={Body2}>
          the API may not be free of bugs or errors and that the existence of minor bugs or errors shall not constitute
          a breach of these API Terms of Use;
        </li>
        <li className={Body2}>
          You remain responsible for Your own hardware, content and any other data uploaded through the API;
        </li>
        <li className={Body2}>
          We accept no responsibility for any liability that arises in connection with anyone else unlawfully obtaining
          access to Your API account in order to abuse the nature and intent of the API (although this does not include
          where We obtain access to Your API account as We are permitted to under these API Terms of Use); and
        </li>
        <li className={Body2}>
          We accept no responsibility for any liability that arises in connection with the theft of Your username or
          password by unauthorised third parties.
        </li>
      </ol>
      <br />
      <p className={Body2}>We do not promise that the API shall be:</p>
      <ol className={list}>
        <li className={Body2}>uninterrupted or error free; or</li>
        <li className={Body2}>compatible with third party software or equipment.</li>
      </ol>
      <br />
      <p className={Body2}>
        Any promises that We make (and We are not saying that We are, unless We have to by applicable law) depend on You
        using the API in compliance with these API Terms of Use and the latest versions of all Documentation.
      </p>
      <br />
      <p className={Body2}>We shall not be liable, nor be required to fix, any problem arising from:</p>

      <ol className={list}>
        <li>
          any modification made to any part of the API by anyone other than Us without Our express prior written
          consent; or
        </li>
        <li>
          any defect or error wholly caused by any equipment or third party software used in connection with the API.
        </li>
      </ol>

      <br />

      <p className={Body2}>
        Subject to what it specifically says in these API Terms of Use and to the maximum extent permitted by applicable
        law, We and Our suppliers:
      </p>

      <ol className={list}>
        <li>
          make no other promises and do not agree to any other terms and conditions (express, implied or statutory) in
          relation to the API, the API Data and the Platform or about results to be obtained from using the API, the API
          Data or the Platform; and
        </li>

        <li>shall not be liable for any loss or damage arising out of any virus or other malicious code.</li>
      </ol>

      <br />
      <br />

      <h3 className={Label1}>Liability</h3>
      <br />
      <p className={Body2}>
        We shall not be liable to You for any loss of profits, business, contracts, anticipated savings, goodwill, or
        revenue, any wasted expenditure, or any loss or corruption of data (regardless of whether any of these are
        direct, indirect or consequential), or any indirect or consequential loss or damage whatsoever, arising under or
        in connection with these API Terms of Use, even if We were aware of the possibility that such loss or damage
        might be incurred by You.
      </p>
      <br />
      <p className={Body2}>
        Except that We do not exclude or limit any liability to the extent the same cannot be excluded or limited by law
        (such as fraud, fraudulent misrepresentation, or personal injury resulting from Our or Our employees'
        negligence).
      </p>
      <br />
      <p className={Body2}>
        Other than as expressly stated, the limitations and exclusions of liability above apply to all losses, damages,
        liabilities and claims howsoever arising, including in negligence or otherwise.
      </p>
      <br />
      <h3 className={Label1}>Indemnification</h3>
      <br />
      <p className={Body2}>You agree to indemnify Us against all losses or damage We may suffer related to:</p>
      <ol className={list}>
        <li className={Body2}>the Application infringing the intellectual property rights of anyone (including Us);</li>
        <li className={Body2}>
          any misuse of the API or API Data, including any claim Your use of the API Data infringes the intellectual
          property rights or privacy rights of anyone else; and
        </li>
        <li className={Body2}>
          any breach by You of any promise or non-performance of any of Your obligations under these API Terms of Use.
        </li>
      </ol>
      <br />
      <p className={Body2}>
        This means that, in these particular circumstances, You will fully reimburse Us for any losses on a '£' for '£'
        basis, without Us having to take steps to avoid or minimise Our loss or to prove this is direct or foreseeable.
      </p>
      <br />
      <h3 className={Label1}>Updates to the API</h3>
      <br />
      <p className={Body2}>
        We may make changes to the API at any time and for any reason. We will notify You of such changes by email
        and/or the updated API and any corresponding updates to related documentation can be accessed at telegram
        channel <Link href="https://t.me/tonconsole_com">@tonconsole_com</Link>. If any change We make is not acceptable
        to You, stop using the API. Your continued use of the API means that You accept the change to the API.
      </p>
      <br />
      <h3 className={Label1}>Termination</h3>
      <br />
      <p className={Body2}>
        If You breach these API Terms of Use, Your rights to use the API and the API Data will automatically terminate,
        and We can shut down or restrict Your access to the API, the API Data and/or Your API integration.
      </p>
      <br />
      <p className={Body2}>
        Otherwise, the licences granted by Us under these API Terms of Use will continue until We terminate Your use
        (which we may do at any time for any reason and without notice) or You stop using the API, the API Data and the
        Platform.
      </p>
      <br />
      <p className={Body2}>
        In the event that any of the licences granted by Us under these API Terms of Use terminate for any reason, You
        shall promptly permanently delete and destroy all copies of the API and/or API Data in Your possession or
        control.
      </p>
      <br />
      <p className={Body2}>
        Your obligations relating to the API, API Data, data protection, security and confidentiality and the
        indemnities and licences granted by You and the limitations and exclusions of liability set out in these API
        Terms of Use and any other provisions expressed or implied to survive will continue even after any licences
        (and/or these API Terms of Use) have otherwise ended for any reason.
      </p>
      <br />
      <h3 className={Label1}>Other</h3>
      <br />
      <p className={Body2}>
        Nothing in these API Terms of Use shall (except as expressly provided) be deemed to constitute a partnership, or
        create a relationship of principal and agent between You and Us for any purpose.
      </p>
      <br />
      <p className={Body2}>
        You are only permitted to allow a third party to benefit from the API (such as a related company of Yours or
        Your customers) if You ensure that such use:
      </p>
      <ol className={list}>
        <li className={Body2}>does not exceed Your permitted use under these API Terms of Use;</li>
        <li className={Body2}>is controlled by You;</li>
        <li className={Body2}>
          does not involve the disclosure of any Confidential Information or API Data (other than in accordance with the
          terms of these API Terms of Use); and
        </li>
        <li className={Body2}>is otherwise subject to and in accordance with these API Terms of Use.</li>
      </ol>
      <br />
      <h3 className={Label1}>Governing law and jurisdiction</h3>
      <br />
      <p className={Body2}>
        These API Terms of Use and any dispute or claim arising out of, or in connection with, these API Terms of Use,
        their subject matter or formation (including non-contractual disputes or claims) shall be governed by, and
        construed in accordance with, the laws of England and Wales and subject to the exclusive jurisdiction of the
        courts of England and Wales.
      </p>
      <ol className={list}>
        <li className={Body2}>
          Both parties shall first resolve any dispute or claim arising out of or relating to the API Terms of Use by
          way of negotiation failing which mediation, to any mutually agreed to mediation service for mediation by
          providing to the mediation service a joint, written request for mediation, setting forth the subject of the
          dispute and the relief requested (<b>Mediation</b>). The parties shall cooperate with one another in selecting
          a mediation service and shall cooperate with the Mediation service and with one another in selecting a neutral
          mediatior and in scheduling the Mediation proceedings. The parties covenant that they will use commercially
          reasonable efforts in participating in the Mediation. The parties agree that the mediator's fees and expenses
          and the costs incidental to the Mediation will be shared equally between the parties.
        </li>
        <li className={Body2}>
          The parties further agree that all offers, promises, conduct, and statements, whether oral or written, made in
          the course of the Mediation by any of the parties, their agents, employees, experts, and legal advisors, and
          by the mediator and any employees of the mediation service, are confidential, privileged, and inadmissible for
          any purpose, including impeachment, in any litigation, arbitration or other proceeding involving the parties,
          provided that evidence that is otherwise admissible or discoverable shall not be rendered inadmissible or
          non-discoverable as a result of its use in the Mediation.
        </li>
        <li className={Body2}>
          If the parties cannot resolve any dispute under these API Terms of Use, for any reason, including, but not
          limited to, the failure of either party to agree to enter into mediation or agree to any settlement proposed
          by the mediator within 20 business days after the first date of the mediation, either party may make a claim
          in accordance with this clause and subject to the exclusive jurisdiction of the courts of England and Wales.
        </li>
      </ol>
      <br />
    </div>
  );
});
