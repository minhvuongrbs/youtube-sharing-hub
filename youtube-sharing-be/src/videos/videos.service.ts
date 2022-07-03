import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VideoEntity } from './video.entity';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(VideoEntity)
    private readonly videosRepository: Repository<VideoEntity>,
  ) {}
  showAllVideos() {
    return this.videosRepository.find();
  }

  shareNewVideo({ youtubeUrl }: { youtubeUrl: string }) {
    return this.videosRepository.insert({ youtubeUrl });
  }
}
