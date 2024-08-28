import { Accordion, Button, Container, Flex, Title } from '@mantine/core';
import RouteEnum from '../../constants/route/enum';
import { useNavigate } from 'react-router-dom';
import contents from './contents';

const links = [
  {
    label: 'useMemo and Depedencies of React Demo',
    href: RouteEnum.UseMemo,
  },
];
export default function Homepage() {
  const push = useNavigate();
  return (
    <Container mih="100dvh" miw="100dvw" maw="100dvw" p={16}>
      <Title mb={16} order={1}>
        React Fundamental Explanation Demo
      </Title>
      <Flex direction="column" gap={24}>
        {links.map((link) => {
          return (
            <Button onClick={() => push(link.href)} w="fit-content">
              {link.label}
            </Button>
          );
        })}
        <Title mb={16} order={1}>
          React Fundamental Explanation
        </Title>
        {contents.map((content, index) => (
          <Accordion variant="contained">
            <Accordion.Item key={index} value={index.toString()}>
              <Accordion.Control>
                <Title order={4}>{content.title}</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <pre
                  style={{
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {content.content}
                </pre>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        ))}
      </Flex>
    </Container>
  );
}
