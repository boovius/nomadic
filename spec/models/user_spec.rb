require 'spec_helper'

describe User do
  describe '#profile_incomplete?' do
    context 'when user has both home and work zips filled out' do
      let!(:user){ create(:user, home_zip: '90405', work_zip: '90305') }

      it 'returns false' do
        expect(user.profile_incomplete?).to eq false
      end
    end

    context 'when user has just home zip filled out' do
      let!(:user){ create(:user, home_zip: '90405') }

      it 'returns true' do
        expect(user.profile_incomplete?).to eq true
      end
    end

    context 'when user has just work zip filled out' do
      let!(:user){ create(:user, work_zip: '90305') }

      it 'returns true' do
        expect(user.profile_incomplete?).to eq true
      end
    end

    context 'when user has neither home or work zips filled out' do
      let!(:user){ create(:user) }

      it 'returns true' do
        expect(user.profile_incomplete?).to eq true
      end
    end
  end
end
