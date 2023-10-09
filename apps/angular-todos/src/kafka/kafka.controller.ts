import { EventPattern, Payload } from "@nestjs/microservices";
import { KafkaMessage } from "./KafkaMessage";
import { Controller } from "@nestjs/common";

@Controller("kafka-controller")
export class KafkaController {
  @EventPattern("elk.receve")
  async onElkReceve(
    @Payload()
    message: KafkaMessage
  ): Promise<void> {}
}
